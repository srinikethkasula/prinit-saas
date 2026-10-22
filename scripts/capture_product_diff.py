"""
Capture screenshots of localhost:3000/product and prinit-saas.netlify.app/product
at multiple viewports for visual diff analysis.
"""

from playwright.sync_api import sync_playwright
import os
import time

OUTPUT_DIR = r"C:\Users\kasul\Projects\prinit-saas\screenshots\product_diff"
os.makedirs(OUTPUT_DIR, exist_ok=True)

VIEWPORTS = [
    {"name": "desktop", "width": 1920, "height": 1080},
    {"name": "laptop",  "width": 1366, "height": 768},
    {"name": "tablet",  "width": 768,  "height": 1024},
    {"name": "mobile",  "width": 375,  "height": 812},
]

URLS = {
    "local":  "http://localhost:3000/product",
    "prod":   "https://prinit-saas.netlify.app/product",
}


def capture(page, url, label, vp):
    """Navigate to url and capture full-page screenshot."""
    try:
        page.goto(url, wait_until="networkidle", timeout=30000)
        time.sleep(1.5)  # let any animations settle
        path = os.path.join(OUTPUT_DIR, f"{label}_{vp['name']}.png")
        page.screenshot(path=path, full_page=True)
        print(f"  Saved: {path}")
        return True
    except Exception as e:
        print(f"  ERROR capturing {url} @ {vp['name']}: {e}")
        return False


def main():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        for vp in VIEWPORTS:
            print(f"\n=== Viewport: {vp['name']} ({vp['width']}x{vp['height']}) ===")
            context = browser.new_context(
                viewport={"width": vp["width"], "height": vp["height"]},
                device_scale_factor=1,
            )
            page = context.new_page()

            for label, url in URLS.items():
                print(f"  Capturing {label}: {url}")
                capture(page, url, label, vp)

            context.close()

        # Also capture above-the-fold (non-full-page) for the two key sizes
        for vp_name, width, height in [("desktop", 1920, 1080), ("mobile", 375, 812)]:
            for label, url in URLS.items():
                context = browser.new_context(
                    viewport={"width": width, "height": height},
                    device_scale_factor=1,
                )
                page = context.new_page()
                try:
                    page.goto(url, wait_until="networkidle", timeout=30000)
                    time.sleep(1.5)
                    path = os.path.join(OUTPUT_DIR, f"{label}_{vp_name}_atf.png")
                    page.screenshot(path=path, full_page=False)
                    print(f"  ATF saved: {path}")
                except Exception as e:
                    print(f"  ERROR ATF {url}: {e}")
                context.close()

        browser.close()
    print("\nAll captures complete.")


if __name__ == "__main__":
    main()
