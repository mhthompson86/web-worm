import { Inject, Injectable } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import 'clipboard';

import 'prismjs';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/command-line/prism-command-line';
import 'prismjs/plugins/download-button/prism-download-button';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-markdown';

declare var Prism: any;


@Injectable({
  providedIn: 'root'
})
export class HighlightService {

  constructor(@Inject(PLATFORM_ID) private platformId: object) { }

  highlightAll() {
    if (isPlatformBrowser(this.platformId)) {
      Prism.highlightAll();
    }
  }
}
