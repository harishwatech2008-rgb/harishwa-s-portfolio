#!/usr/bin/env python3
"""
Simple HTTP Development Server for Harishwa S Portfolio
Runs on http://localhost:5173
"""

import os
import sys
from http.server import HTTPServer, SimpleHTTPRequestHandler

# Enable UTF-8 encoding for standard output if available
if hasattr(sys.stdout, 'reconfigure'):
    sys.stdout.reconfigure(encoding='utf-8')

PORT = 5173
PROJECT_DIR = os.path.dirname(os.path.abspath(__file__))

class PortfolioHTTPRequestHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PROJECT_DIR, **kwargs)

    def end_headers(self):
        # Disable caching for instant hot-reload during edits
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def run_server():
    os.chdir(PROJECT_DIR)
    server_address = ('127.0.0.1', PORT)
    try:
        httpd = HTTPServer(server_address, PortfolioHTTPRequestHandler)
        url = f'http://localhost:{PORT}'
        print('=' * 60)
        print(f'[OK] Harishwa S Portfolio Server running at: {url}')
        print(f'[DIR] Serving from: {PROJECT_DIR}')
        print('[INFO] Press Ctrl+C to stop the server.')
        print('=' * 60)
        httpd.serve_forever()
    except KeyboardInterrupt:
        print('\n[STOP] Server stopped gracefully.')
        sys.exit(0)
    except Exception as e:
        print(f'[ERROR] Server error: {e}')
        sys.exit(1)

if __name__ == '__main__':
    run_server()
