import{d as T,W as E,j as o,bO as j}from"./iframe-C48Cgo5e.js";import{u as O}from"./useTranscriptContextMenu-e5SKaDtk.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,fireEvent:B,fn:S,userEvent:b,waitFor:s,within:h}=__STORYBOOK_MODULE_TEST__;function P(t){const e=T.c(7),c=E.useRef(null);let d;e[0]===Symbol.for("react.memo_cache_sentinel")?(d={transcriptRootRef:c,onQuoteText:_},e[0]=d):d=e[0];const r=O(d);let n;e[1]!==t.markdown?(n=o.jsx("div",{"data-transcript-message":!0,children:o.jsx("div",{"data-transcript-quote-root":!0,children:t.markdown?o.jsx(j,{content:t.markdown}):o.jsxs(o.Fragment,{children:[o.jsxs("p",{children:["Before ",o.jsx("strong",{"data-testid":"selection",children:"bold selection"})," after"]}),o.jsx("p",{children:o.jsx("a",{href:"https://example.com",children:"Example link"})})]})})}),e[1]=t.markdown,e[2]=n):n=e[2];let i;return e[3]!==r.menu||e[4]!==r.onContextMenu||e[5]!==n?(i=o.jsxs("div",{ref:c,onContextMenu:r.onContextMenu,className:"p-4",children:[n,r.menu]}),e[3]=r.menu,e[4]=r.onContextMenu,e[5]=n,e[6]=i):i=e[6],i}function _(){}const D={title:"App/Chat/Transcript Context Menu",component:P},l={play:async({canvasElement:t,args:e})=>{const c=t.ownerDocument,d=h(t),r=h(c.body);e.markdown?.includes("$$")&&await s(()=>a(t.querySelector(".katex")).not.toBeNull());const n=await d.findByText("bold selection",{selector:'strong, [data-streamdown="strong"]'});await s(()=>a(n).toBeVisible());const i=c.createRange();i.selectNodeContents(n);const p=c.getSelection();p.removeAllRanges(),p.addRange(i);const x=async()=>{const w=n.getBoundingClientRect();return await B.contextMenu(n,{clientX:w.right,clientY:w.bottom}),r.findByRole("button",{name:/Copy Markdown/})},v=Object.getOwnPropertyDescriptor(navigator,"clipboard"),u=S().mockResolvedValue(void 0);Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{write:u}});try{const w=await x();await s(()=>a(w).toBeVisible()),await b.click(w),await s(()=>a(u).toHaveBeenCalledTimes(1));const f=u.mock.calls[0][0][0];await a(await(await f.getType("text/plain")).text()).toBe("**bold selection**"),await a(await(await f.getType("text/html")).text()).toBe("<p><strong>bold selection</strong></p>"),await s(()=>a(w).not.toBeInTheDocument()),p.removeAllRanges(),p.addRange(i);const C=await x();await s(()=>a(C).toBeVisible()),await b.keyboard("m"),await s(()=>a(u).toHaveBeenCalledTimes(2)),p.removeAllRanges(),await B.contextMenu(n),await a(r.queryByRole("button",{name:/Copy Markdown/})).not.toBeInTheDocument(),await b.keyboard("{Escape}"),p.addRange(i);const k=await x();await s(async()=>{const M=k.getBoundingClientRect();await a(M.left).toBeGreaterThanOrEqual(0),await a(M.right).toBeLessThanOrEqual(c.documentElement.clientWidth)}),c.documentElement.clientWidth<640&&await a(h(k).getByText("(M)")).not.toBeVisible()}finally{v?Object.defineProperty(navigator,"clipboard",v):Reflect.deleteProperty(navigator,"clipboard")}}},m={...l,globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},play:async t=>{await a(t.parameters).toMatchObject({pixel:{matrix:{viewports:["phone"]}}}),await a(t.globals).toMatchObject({viewport:{value:"phone390"}}),await l.play?.(t)}},R=["Before **bold selection** after",`- [x] parent
  - [ ] child`,`<details open>
<summary>Math</summary>

$$x^2$$

</details>`,"```typescript\nconst x = 1;\n```",'<span class="sr-only" style="position:fixed;left:-10000px">Raw HTML cannot conceal this text.</span>'].join(`

`),y={...l,args:{markdown:R},play:async t=>{await l.play?.(t)}},g={...m,args:{markdown:R},play:async t=>{await m.play?.(t)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const document = canvasElement.ownerDocument;
    const canvas = within(canvasElement);
    const body = within(document.body);
    // KaTeX loads lazily and then re-renders the message, so select text only after that.
    if (args.markdown?.includes("$$")) {
      await waitFor(() => expect(canvasElement.querySelector(".katex")).not.toBeNull());
    }
    const selected = await canvas.findByText("bold selection", {
      selector: 'strong, [data-streamdown="strong"]'
    });
    await waitFor(() => expect(selected).toBeVisible());
    const range = document.createRange();
    range.selectNodeContents(selected);
    const selection = document.getSelection()!;
    selection.removeAllRanges();
    selection.addRange(range);
    const openMenu = async () => {
      const rect = selected.getBoundingClientRect();
      await fireEvent.contextMenu(selected, {
        clientX: rect.right,
        clientY: rect.bottom
      });
      return body.findByRole("button", {
        name: /Copy Markdown/
      });
    };
    const originalClipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    const write = fn<(items: ClipboardItem[]) => Promise<void>>().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        write
      }
    });
    try {
      const copy = await openMenu();
      await waitFor(() => expect(copy).toBeVisible());
      await userEvent.click(copy);
      await waitFor(() => expect(write).toHaveBeenCalledTimes(1));
      const item = write.mock.calls[0][0][0];
      await expect(await (await item.getType("text/plain")).text()).toBe("**bold selection**");
      await expect(await (await item.getType("text/html")).text()).toBe("<p><strong>bold selection</strong></p>");
      await waitFor(() => expect(copy).not.toBeInTheDocument());
      selection.removeAllRanges();
      selection.addRange(range);
      const keyboardCopy = await openMenu();
      await waitFor(() => expect(keyboardCopy).toBeVisible());
      await userEvent.keyboard("m");
      await waitFor(() => expect(write).toHaveBeenCalledTimes(2));
      selection.removeAllRanges();
      await fireEvent.contextMenu(selected);
      await expect(body.queryByRole("button", {
        name: /Copy Markdown/
      })).not.toBeInTheDocument();
      await userEvent.keyboard("{Escape}");
      selection.addRange(range);
      const visibleCopy = await openMenu();
      await waitFor(async () => {
        const rect = visibleCopy.getBoundingClientRect();
        await expect(rect.left).toBeGreaterThanOrEqual(0);
        await expect(rect.right).toBeLessThanOrEqual(document.documentElement.clientWidth);
      });
      if (document.documentElement.clientWidth < 640) {
        await expect(within(visibleCopy).getByText("(M)")).not.toBeVisible();
      }
    } finally {
      if (originalClipboard) Object.defineProperty(navigator, "clipboard", originalClipboard);else Reflect.deleteProperty(navigator, "clipboard");
    }
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...SelectedMarkdown,
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  play: async context => {
    await expect(context.parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["phone"]
        }
      }
    });
    await expect(context.globals).toMatchObject({
      viewport: {
        value: "phone390"
      }
    });
    await SelectedMarkdown.play?.(context);
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...SelectedMarkdown,
  args: {
    markdown: renderedMarkdown
  },
  play: async context => {
    await SelectedMarkdown.play?.(context);
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...SelectedMarkdownPhone,
  args: {
    markdown: renderedMarkdown
  },
  play: async context => {
    await SelectedMarkdownPhone.play?.(context);
  }
}`,...g.parameters?.docs?.source}}};const $=["SelectedMarkdown","SelectedMarkdownPhone","RenderedMarkdown","RenderedMarkdownPhone"];export{y as RenderedMarkdown,g as RenderedMarkdownPhone,l as SelectedMarkdown,m as SelectedMarkdownPhone,$ as __namedExportsOrder,D as default};
