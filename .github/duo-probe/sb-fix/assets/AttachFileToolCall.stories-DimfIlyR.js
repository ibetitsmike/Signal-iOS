import{cm as r,j as e,cn as h,d as R}from"./iframe-DwmVy7SQ.js";import{l as D}from"./meta-CT6GdK4g.js";import{a as k}from"./touchPointer-CV8GcnjV.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const{expect:S,fireEvent:c,waitFor:i,within:m}=__STORYBOOK_MODULE_TEST__,oe={...D,title:"App/Chat/Tools/AttachFile",component:r},I="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+/p9sAAAAASUVORK5CYII=",p="ZGlzcGxheS1vbmx5IGZpbGU=",F=`application/${"x".repeat(160)}`,C=`image/${"y".repeat(80)}`;function g(t){return{type:"content",value:[{type:"text",text:`[File shown to user: ${t.filename??t.mediaType}]`},t]}}function b(t){const a=R.c(2);let o;return a[0]!==t.children?(o=e.jsx("div",{className:"bg-background p-6",children:e.jsx("div",{className:"w-full max-w-2xl",children:t.children})}),a[0]=t.children,a[1]=o):o=a[1],o}function d(t){const a=R.c(5);let o;a[0]!==t.label?(o=e.jsx("div",{className:"text-muted-foreground text-xs font-medium tracking-wide uppercase",children:t.label}),a[0]=t.label,a[1]=o):o=a[1];let n;return a[2]!==t.children||a[3]!==o?(n=e.jsxs("section",{className:"flex flex-col gap-2",children:[o,t.children]}),a[2]=t.children,a[3]=o,a[4]=n):n=a[4],n}const y={parameters:{pixel:{mask:[{selector:"video, audio"}]}},render:()=>e.jsx(b,{children:e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsx(d,{label:"Image attachment",children:e.jsx(r,{toolName:"attach_file",args:{path:"screenshot.png"},result:{type:"content",value:[{type:"text",text:"[Attachment prepared: screenshot.png]"},{type:"media",data:I,mediaType:"image/png",filename:"screenshot.png"}]},status:"completed"})}),e.jsx(d,{label:"Display-only video",children:e.jsx(r,{toolName:"attach_file",args:{path:"recording.webm"},result:g(h({data:p,mediaType:"video/webm",filename:"recording.webm",size:17408})),status:"completed"})}),e.jsx(d,{label:"Display-only audio",children:e.jsx(r,{toolName:"attach_file",args:{path:"voice-note.mp3"},result:g(h({data:p,mediaType:"audio/mpeg",filename:"voice-note.mp3",size:8192})),status:"completed"})}),e.jsx(d,{label:"Display-only markdown",children:e.jsx(r,{toolName:"attach_file",args:{path:"release-notes.md"},result:g(h({data:"IyBSZWxlYXNlIE5vdGVzCgotIEFkZGVkICoqbWFya2Rvd24qKiBwcmV2aWV3Lgo=",mediaType:"text/markdown",filename:"release-notes.md",size:47})),status:"completed"})}),e.jsx(d,{label:"PDF attachment (download card)",children:e.jsx(r,{toolName:"attach_file",args:{path:"quarterly-report.pdf"},result:{type:"content",value:[{type:"text",text:"[Attachment prepared: quarterly-report.pdf]"},{type:"media",data:p,mediaType:"application/pdf",filename:"quarterly-report.pdf"}]},status:"completed"})}),e.jsx(d,{label:"Display-only generic file",children:e.jsx(r,{toolName:"attach_file",args:{path:"archive.zip",filename:"support-bundle.zip"},result:g(h({data:p,mediaType:"application/octet-stream",filename:"support-bundle.zip",size:524288})),status:"completed"})})]})})},w={tags:["attachment-responsive"],globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone"]}}},render:()=>e.jsx(b,{children:e.jsx("div",{className:"w-[320px] max-w-full",children:e.jsx(r,{toolName:"attach_file",args:{path:"notes.bin"},result:{type:"content",value:[{type:"text",text:"[Attachment prepared: narrow metadata]"},h({data:p,mediaType:F,filename:"notes.bin",size:17}),{type:"media",data:p,mediaType:C,filename:"diagram.bin"}]},status:"completed"})})}),play:async({canvasElement:t})=>{const a=m(t),o=await Promise.all([a.findByText(F),a.findByText(C)]);await i(()=>{for(const l of o){const s=l.parentElement?.parentElement;if(s==null)throw new Error("Attachment card was not rendered");if(l.getBoundingClientRect().right>s.getBoundingClientRect().right+1)throw new Error("Media type overflows the attachment card")}});const n=k(t.ownerDocument);try{const l=a.getAllByRole("button",{name:"Download"});await S(l.length).toBeGreaterThan(0);for(const s of l)await S(s.scrollWidth).toBeLessThanOrEqual(s.clientWidth)}finally{n()}}};function A(){return e.jsx(b,{children:e.jsx(r,{toolName:"attach_file",args:{path:"screenshot.png"},result:{type:"content",value:[{type:"text",text:"[Attachment prepared: screenshot.png]"},{type:"media",data:I,mediaType:"image/png",filename:"screenshot.png"}]},status:"completed"})})}const f={render:A,play:async({canvasElement:t})=>{const o=await m(t).findByRole("img",{name:"screenshot.png"});await c.contextMenu(o,{clientX:120,clientY:160});const n=m(document.body);await i(()=>n.getByText("Copy image")),await i(()=>n.getByText("Download image")),await i(()=>n.getByText("View full size"))}},x={render:A,play:async({canvasElement:t})=>{const o=await m(t).findByRole("img",{name:"screenshot.png"}),n=new Touch({identifier:1,target:o,clientX:120,clientY:160});await c.touchStart(o,{touches:[n],changedTouches:[n]});const l=m(document.body);await i(()=>l.getByText("Copy image"),{timeout:3e3}),await c.touchEnd(o,{changedTouches:[n]}),await c.click(o),await i(()=>{if(l.queryByText("Image Preview"))throw new Error("Lightbox should not open after a long-press")})}},T={render:A,play:async({canvasElement:t})=>{const o=await m(t).findByRole("img",{name:"screenshot.png"});await c.click(o);const n=m(document.body);await i(()=>n.getByText("Image Preview"));const l=document.body.querySelector("[role='dialog']");if(!(l instanceof HTMLElement))throw new Error("Lightbox dialog not found");const s=m(l).getByRole("img");await c.contextMenu(s,{clientX:240,clientY:200});const M=await i(()=>n.getByText("Copy image"));await i(()=>n.getByText("Download image"));const B=M.closest("[role='dialog']");if(!B)throw new Error("Menu popover content not found");await i(()=>{const u=B.getBoundingClientRect();if(Math.abs(u.left-240)>100||Math.abs(u.top-200)>100)throw new Error(`Context menu misaligned with cursor (240,200): got (${u.left},${u.top})`)}),await i(async()=>{if(n.queryByText("Copy image"))throw await c.keyDown(document,{key:"Escape"}),new Error("Context menu should close on Escape")}),await i(()=>n.getByText("Image Preview"));const E=new Touch({identifier:1,target:s,clientX:240,clientY:200});await c.touchStart(s,{touches:[E],changedTouches:[E]}),await i(()=>n.getByText("Copy image"),{timeout:3e3}),await c.touchEnd(s,{changedTouches:[E]})}},v={render:()=>e.jsx(b,{children:e.jsx(r,{toolName:"attach_file",args:{path:"missing.webm"},result:{success:!1,error:"File not found: /workspace/missing.webm"},status:"failed"})})};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      // Chromium's native media controls contain an internal loading spinner whose frame is not
      // controlled by page CSS. Mask only those controls; the surrounding attachment UI remains
      // under visual regression coverage.
      mask: [{
        selector: "video, audio"
      }]
    }
  },
  render: () => <ToolStoryShell>
      <div className="flex flex-col gap-6">
        <GallerySection label="Image attachment">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "screenshot.png"
        }} result={{
          type: "content",
          value: [{
            type: "text",
            text: "[Attachment prepared: screenshot.png]"
          }, {
            type: "media",
            data: samplePng,
            mediaType: "image/png",
            filename: "screenshot.png"
          }]
        }} status="completed" />
        </GallerySection>
        <GallerySection label="Display-only video">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "recording.webm"
        }} result={createAttachFileResult(createDisplayOnlyFilePart({
          data: sampleBytes,
          mediaType: "video/webm",
          filename: "recording.webm",
          size: 17_408
        }))} status="completed" />
        </GallerySection>
        <GallerySection label="Display-only audio">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "voice-note.mp3"
        }} result={createAttachFileResult(createDisplayOnlyFilePart({
          data: sampleBytes,
          mediaType: "audio/mpeg",
          filename: "voice-note.mp3",
          size: 8_192
        }))} status="completed" />
        </GallerySection>
        <GallerySection label="Display-only markdown">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "release-notes.md"
        }} result={createAttachFileResult(createDisplayOnlyFilePart({
          data: "IyBSZWxlYXNlIE5vdGVzCgotIEFkZGVkICoqbWFya2Rvd24qKiBwcmV2aWV3Lgo=",
          mediaType: "text/markdown",
          filename: "release-notes.md",
          size: 47
        }))} status="completed" />
        </GallerySection>
        <GallerySection label="PDF attachment (download card)">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "quarterly-report.pdf"
        }} result={{
          type: "content",
          value: [{
            type: "text",
            text: "[Attachment prepared: quarterly-report.pdf]"
          }, {
            type: "media",
            data: sampleBytes,
            mediaType: "application/pdf",
            filename: "quarterly-report.pdf"
          }]
        }} status="completed" />
        </GallerySection>
        <GallerySection label="Display-only generic file">
          <AttachFileToolCall toolName="attach_file" args={{
          path: "archive.zip",
          filename: "support-bundle.zip"
        }} result={createAttachFileResult(createDisplayOnlyFilePart({
          data: sampleBytes,
          mediaType: "application/octet-stream",
          filename: "support-bundle.zip",
          size: 524_288
        }))} status="completed" />
        </GallerySection>
      </div>
    </ToolStoryShell>
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ["attachment-responsive"],
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <ToolStoryShell>
      <div className="w-[320px] max-w-full">
        <AttachFileToolCall toolName="attach_file" args={{
        path: "notes.bin"
      }} result={{
        type: "content",
        value: [{
          type: "text",
          text: "[Attachment prepared: narrow metadata]"
        }, createDisplayOnlyFilePart({
          data: sampleBytes,
          mediaType: longDisplayMediaType,
          filename: "notes.bin",
          size: 17
        }), {
          type: "media",
          data: sampleBytes,
          mediaType: longDownloadMediaType,
          filename: "diagram.bin"
        }]
      }} status="completed" />
      </div>
    </ToolStoryShell>,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const mediaTypes = await Promise.all([canvas.findByText(longDisplayMediaType), canvas.findByText(longDownloadMediaType)]);
    await waitFor(() => {
      for (const mediaType of mediaTypes) {
        const card = mediaType.parentElement?.parentElement;
        if (card == null) throw new Error("Attachment card was not rendered");
        if (mediaType.getBoundingClientRect().right > card.getBoundingClientRect().right + 1) {
          throw new Error("Media type overflows the attachment card");
        }
      }
    });

    // Touch phones give buttons a 44px minimum width, which replaced the Download button's
    // content-based flex minimum and shrank it below its label beside the long description.
    const removeTouchRules = applyTouchPointerRules(canvasElement.ownerDocument);
    try {
      const downloads = canvas.getAllByRole("button", {
        name: "Download"
      });
      await expect(downloads.length).toBeGreaterThan(0);
      for (const download of downloads) {
        await expect(download.scrollWidth).toBeLessThanOrEqual(download.clientWidth);
      }
    } finally {
      removeTouchRules();
    }
  }
}`,...w.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: renderImageAttachment,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByRole("img", {
      name: "screenshot.png"
    });

    // Fixed coordinates keep the menu position deterministic for snapshots.
    await fireEvent.contextMenu(image, {
      clientX: 120,
      clientY: 160
    });

    // The menu renders in a portal attached to document.body.
    const body = within(document.body);
    await waitFor(() => body.getByText("Copy image"));
    await waitFor(() => body.getByText("Download image"));
    await waitFor(() => body.getByText("View full size"));
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: renderImageAttachment,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const image = await canvas.findByRole("img", {
      name: "screenshot.png"
    });

    // Start a touch and hold: the long-press timer opens the menu after 500ms.
    // Chromium's TouchEvent constructor requires real Touch instances (plain
    // objects throw). Fixed coordinates keep the menu position deterministic.
    const touch = new Touch({
      identifier: 1,
      target: image,
      clientX: 120,
      clientY: 160
    });
    await fireEvent.touchStart(image, {
      touches: [touch],
      changedTouches: [touch]
    });

    // The menu renders in a portal attached to document.body. waitFor polls
    // past the 500ms long-press threshold.
    const body = within(document.body);
    await waitFor(() => body.getByText("Copy image"), {
      timeout: 3000
    });
    await fireEvent.touchEnd(image, {
      changedTouches: [touch]
    });

    // The click that follows a long-press must be suppressed: the lightbox
    // must not open on top of the context menu. The Radix popover menu itself
    // has role="dialog", so detect the lightbox by its (visually hidden) title.
    await fireEvent.click(image);
    await waitFor(() => {
      if (body.queryByText("Image Preview")) {
        throw new Error("Lightbox should not open after a long-press");
      }
    });
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: renderImageAttachment,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const thumbnail = await canvas.findByRole("img", {
      name: "screenshot.png"
    });
    await fireEvent.click(thumbnail);

    // The lightbox renders in a portal; locate the full-size image inside it
    // via the dialog's (visually hidden) title.
    const body = within(document.body);
    await waitFor(() => body.getByText("Image Preview"));
    const dialog = document.body.querySelector("[role='dialog']");
    if (!(dialog instanceof HTMLElement)) {
      throw new Error("Lightbox dialog not found");
    }
    const fullSizeImage = within(dialog).getByRole("img");

    // Fixed coordinates keep the menu position deterministic for snapshots.
    await fireEvent.contextMenu(fullSizeImage, {
      clientX: 240,
      clientY: 200
    });
    const menuItem = await waitFor(() => body.getByText("Copy image"));
    await waitFor(() => body.getByText("Download image"));

    // The menu must open at the cursor. Before the virtual-anchor fix, the
    // dialog's translate(-50%,-50%) made the fixed-position anchor resolve
    // against the dialog box, offsetting the menu by hundreds of pixels.
    // 100px tolerance allows for collision flipping while still catching that.
    // Retry inside waitFor: Floating UI positions the content a frame after it
    // mounts (PositionedMenu keeps it hidden until placement settles).
    const menuContent = menuItem.closest("[role='dialog']");
    if (!menuContent) {
      throw new Error("Menu popover content not found");
    }
    await waitFor(() => {
      const menuRect = menuContent.getBoundingClientRect();
      if (Math.abs(menuRect.left - 240) > 100 || Math.abs(menuRect.top - 200) > 100) {
        throw new Error(\`Context menu misaligned with cursor (240,200): got (\${menuRect.left},\${menuRect.top})\`);
      }
    });

    // Escape must close only the menu; the lightbox stays open underneath.
    // Radix attaches its escape listener asynchronously after the menu
    // contents render, so dispatch inside the retry loop — guarded so we never
    // send Escape once the menu is gone (a stray extra Escape would close the
    // lightbox and break the layering assertion below).
    await waitFor(async () => {
      if (body.queryByText("Copy image")) {
        await fireEvent.keyDown(document, {
          key: "Escape"
        });
        throw new Error("Context menu should close on Escape");
      }
    });
    await waitFor(() => body.getByText("Image Preview"));

    // Reopen via the touch long-press path (lightbox-specific contract; the
    // thumbnail long-press story never exercises the lightbox wiring) and
    // leave open so the Pixel snapshot captures lightbox + menu.
    // changedTouches must be populated: the Radix dialog mounts
    // react-remove-scroll, whose document-level touch listeners read
    // event.changedTouches[0] and crash on events that omit it.
    const touch = new Touch({
      identifier: 1,
      target: fullSizeImage,
      clientX: 240,
      clientY: 200
    });
    await fireEvent.touchStart(fullSizeImage, {
      touches: [touch],
      changedTouches: [touch]
    });
    await waitFor(() => body.getByText("Copy image"), {
      timeout: 3000
    });
    await fireEvent.touchEnd(fullSizeImage, {
      changedTouches: [touch]
    });
  }
}`,...T.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <ToolStoryShell>
      <AttachFileToolCall toolName="attach_file" args={{
      path: "missing.webm"
    }} result={{
      success: false,
      error: "File not found: /workspace/missing.webm"
    }} status="failed" />
    </ToolStoryShell>
}`,...v.parameters?.docs?.source}}};const ne=["Gallery","LongMetadataPhone","ImageContextMenu","ImageLongPressMenu","LightboxContextMenu","FailedAttachment"];export{v as FailedAttachment,y as Gallery,f as ImageContextMenu,x as ImageLongPressMenu,T as LightboxContextMenu,w as LongMetadataPhone,ne as __namedExportsOrder,oe as default};
