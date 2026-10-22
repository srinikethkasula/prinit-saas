"""
Capture specific page sections for detailed comparison.
Crops are taken from full-page desktop screenshots at 1920x1080.
"""

import asyncio
from pathlib import Path
from playwright.async_api import async_playwright

URLS = {
    "local": "http://localhost:3000/product",
    "netlify": "https://prinit-saas.netlify.app/product",
}

OUTPUT_DIR = Path("C:/Users/kasul/Projects/prinit-saas/screenshots/sections")

# Sections to capture: (name, y_start_fraction, height_px)
# We'll scroll to each section and take a viewport-sized screenshot
SECTIONS = [
    # name, scroll_y (approx), clip height
    ("navbar",       0,    120),
    ("hero",         0,    700),
    ("whatsapp_anim", 700, 500),
    ("three_steps",  1300, 600),
    ("features",     2000, 700),
    ("workflows",    2800, 700),
    ("cta_footer",   3600, 800),
    ("footer",       4200, 400),
]


async def capture_section(page, label: str, url: str, section_name: str, scroll_y: int, clip_h: int):
    out_path = OUTPUT_DIR / f"{label}_{section_name}.png"
    await page.evaluate(f"window.scrollTo(0, {scroll_y})")
    await page.wait_for_timeout(600)
    await page.screenshot(
        path=str(out_path),
        clip={"x": 0, "y": 0, "width": 1366, "height": clip_h},
    )
    print(f"  Saved {out_path.name}")


async def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            viewport={"width": 1366, "height": 768},
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            ),
        )
        page = await context.new_page()

        for label, url in URLS.items():
            print(f"\n=== {label.upper()} ===")
            await page.goto(url, wait_until="networkidle", timeout=60000)
            await page.wait_for_timeout(3000)

            for section_name, scroll_y, clip_h in SECTIONS:
                try:
                    await capture_section(page, label, url, section_name, scroll_y, clip_h)
                except Exception as e:
                    print(f"  ERROR {section_name}: {e}")

        await browser.close()

    print("\nDone.")


asyncio.run(main())
