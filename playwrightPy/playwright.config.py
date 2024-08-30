# playwright.config.py

from playwright.sync_api import Playwright, sync_playwright

def pytest_playwright_browser_type():
    # Set the default browser type to "firefox"
    return "firefox"  # Change this to "chromium" or "webkit" if desired

def pytest_playwright_context_args(browser_context_args):
    # Add additional options to the browser context
    return {
        **browser_context_args,
        "viewport": {"width": 1280, "height": 720},  # Set default viewport size
        "ignore_https_errors": True,                 # Ignore HTTPS errors
        "headless": True,                            # Run in headless mode or not
    }

def pytest_addoption(parser):
    # Add command line options for pytest
    parser.addoption("--base-url", action="store", default="https://example.com", help="Base URL for the tests")

def pytest_configure(config):
    # Set the base URL for tests
    config.base_url = config.getoption("--base-url")

