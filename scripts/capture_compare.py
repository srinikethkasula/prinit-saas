"""
Full-page screenshot capture for visual comparison.
Captures desktop (1920x1080), laptop (1366x768), tablet (768x1024), and mobile (375x812)
for both localhost:3000/product and Netlify production.
"""

import asyncio
import os
from pathlib import Path
from playwright.async_api import async_playwright

URLS = {
    "local": "http://localhost:3000/product",
    "netlify": "https://prinit-saas.netlify.app/product",
}

VIEWPORTS = {
    "desktop": {"width": 1920, "height": 1080},
    "laptop": {"width": 1366, "height": 768},
    "tablet": {"width": 768, "height": 1024},
    "mobile": {"width": 375, "height": 812},
}

OUTPUT_DIR = Path("C:/Users/kasul/Projects/prinit-saas/screenshots")


async def capture(page, url: str, label: str, viewport_name: str, vp: dict):
    out_path = OUTPUT_DIR / f"{label}_{viewport_name}.png"
    print(f"  Capturing {label} @ {viewport_name} ({vp['width']}x{vp['height']}) ...")
    await page.set_viewport_size(vp)
    await page.goto(url, wait_until="networkidle", timeout=60000)
    # Wait a bit extra for animations / fonts
    await page.wait_for_timeout(3000)
    await page.screenshot(path=str(out_path), full_page=True)
    print(f"  Saved -> {out_path}")


async def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        context = await browser.new_context(
            user_agent=(
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
                "AppleWebKit/537.36 (KHTML, like Gecko) "
                "Chrome/124.0.0.0 Safari/537.36"
            )
        )
        page = await context.new_page()

        for label, url in URLS.items():
            print(f"\n=== {label.upper()} : {url} ===")
            for vp_name, vp in VIEWPORTS.items():
                try:
                    await capture(page, url, label, vp_name, vp)
                except Exception as e:
                    print(f"  ERROR on {label}/{vp_name}: {e}")

        await browser.close()
    print("\nAll screenshots captured.")


asyncio.run(main())
