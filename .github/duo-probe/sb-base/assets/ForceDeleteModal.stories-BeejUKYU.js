import{W as v,j as b}from"./iframe-C48Cgo5e.js";import{F as B}from"./ForceDeleteModal-BUKi4yPi.js";import"./preload-helper-PPVm8Dsz.js";const{expect:e,fn:y,mocked:h,userEvent:l,waitFor:m,within:n}=__STORYBOOK_MODULE_TEST__,c=[{workspaceId:"child-review",title:"Review child",active:!1},{workspaceId:"child-build",title:"Build child",active:!1}],f={title:"Components/ForceDeleteModal",component:B,args:{isOpen:!0,workspaceId:"parent",error:"Descendant confirmation required",descendants:c,onClose:y(),onForceDelete:y(()=>Promise.resolve({success:!0}))},render:function(a){const[o,t]=v.useState(!0);return b.jsx(B,{...a,isOpen:o,onClose:()=>{a.onClose(),t(!1)}})}},r={play:async({canvasElement:i,args:a})=>{const o=n(i.ownerDocument.body),t=await o.findByRole("dialog"),s=n(t).getByRole("region",{name:"Descendant workspaces"});await e(n(s).getAllByRole("listitem")).toHaveLength(2),await e(a.onForceDelete).not.toHaveBeenCalled(),await l.click(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})),await m(()=>e(a.onForceDelete).toHaveBeenCalledWith("parent",["child-review","child-build"])),await m(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument()),await e(a.onClose).toHaveBeenCalledTimes(1)}},d={args:{descendants:[{...c[0],active:!0}]},play:async({canvasElement:i,args:a})=>{const o=n(i.ownerDocument.body),t=await o.findByRole("dialog");await e(n(t).getAllByRole("button")).toHaveLength(1),t.focus(),await l.keyboard("y"),await e(a.onForceDelete).not.toHaveBeenCalled(),await e(a.onClose).not.toHaveBeenCalled(),await l.click(n(t).getByRole("button",{name:"Close"})),await m(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument())}},w={beforeEach:({args:i})=>{h(i.onForceDelete).mockResolvedValueOnce({success:!1,error:"New descendants need confirmation",descendants:[c[1]]}).mockResolvedValue({success:!0})},play:async({canvasElement:i,args:a})=>{const o=n(i.ownerDocument.body),t=await o.findByRole("dialog");await l.click(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})),await e(await o.findByText("New descendants need confirmation")).toBeVisible(),await e(a.onClose).not.toHaveBeenCalled(),await e(n(t).getAllByRole("listitem")).toHaveLength(1),await e(o.queryByText(c[0].title)).not.toBeInTheDocument(),await l.click(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})),await e(a.onForceDelete).toHaveBeenNthCalledWith(1,"parent",["child-review","child-build"]),await e(a.onForceDelete).toHaveBeenNthCalledWith(2,"parent",["child-build"]),await m(()=>e(o.queryByRole("dialog")).not.toBeInTheDocument())}},p={beforeEach:({args:i})=>{h(i.onForceDelete).mockResolvedValue({success:!1,error:"Child starts running",descendants:[{...c[0],active:!0}]})},play:async({canvasElement:i,args:a})=>{const o=n(i.ownerDocument.body),t=await o.findByRole("dialog");await l.click(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})),await e(await o.findByText("Child starts running")).toBeVisible(),await e(n(t).getAllByRole("button")).toHaveLength(1),t.focus(),await l.keyboard("y"),await e(a.onForceDelete).toHaveBeenCalledTimes(1),await e(a.onClose).not.toHaveBeenCalled()}},g={beforeEach:({args:i})=>{h(i.onForceDelete).mockRejectedValue(new Error("Transport unavailable"))},play:async({canvasElement:i,args:a})=>{const o=n(i.ownerDocument.body),t=await o.findByRole("dialog");await l.click(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})),await e(await o.findByText("Transport unavailable")).toBeVisible(),await e(n(t).getAllByRole("listitem")).toHaveLength(2),await e(n(t).getByRole("button",{name:"Delete Workspace and Descendants"})).toBeEnabled(),await e(a.onClose).not.toHaveBeenCalled()}},u={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},args:{descendants:[{workspaceId:"child-"+"long-id-".repeat(16),title:"A long descendant title that must wrap inside the deletion dialog",active:!1}]},play:async({canvasElement:i,parameters:a,globals:o})=>{await e(a).toMatchObject({pixel:{matrix:{viewports:["phone"]}}}),await e(o).toMatchObject({viewport:{value:"phone390"}});const t=await n(i.ownerDocument.body).findByRole("dialog");if(window.innerWidth<=390){await e(t.getBoundingClientRect().left).toBeGreaterThanOrEqual(0),await e(t.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth);const s=n(t).getByRole("button",{name:"Delete Workspace and Descendants"});await e(s).toBeVisible(),await e(s.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await e(n(s).getByText("Y")).not.toBeVisible()}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    const scope = within(dialog).getByRole("region", {
      name: "Descendant workspaces"
    });
    await expect(within(scope).getAllByRole("listitem")).toHaveLength(2);
    await expect(args.onForceDelete).not.toHaveBeenCalled();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    }));
    await waitFor(() => expect(args.onForceDelete).toHaveBeenCalledWith("parent", ["child-review", "child-build"]));
    await waitFor(() => expect(page.queryByRole("dialog")).not.toBeInTheDocument());
    await expect(args.onClose).toHaveBeenCalledTimes(1);
  }
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    descendants: [{
      ...descendants[0],
      active: true
    }]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    await expect(within(dialog).getAllByRole("button")).toHaveLength(1);
    dialog.focus();
    await userEvent.keyboard("y");
    await expect(args.onForceDelete).not.toHaveBeenCalled();
    await expect(args.onClose).not.toHaveBeenCalled();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Close"
    }));
    await waitFor(() => expect(page.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  beforeEach: ({
    args
  }) => {
    mocked(args.onForceDelete).mockResolvedValueOnce({
      success: false,
      error: "New descendants need confirmation",
      descendants: [descendants[1]]
    }).mockResolvedValue({
      success: true
    });
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    }));
    await expect(await page.findByText("New descendants need confirmation")).toBeVisible();
    await expect(args.onClose).not.toHaveBeenCalled();
    await expect(within(dialog).getAllByRole("listitem")).toHaveLength(1);
    await expect(page.queryByText(descendants[0].title)).not.toBeInTheDocument();
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    }));
    await expect(args.onForceDelete).toHaveBeenNthCalledWith(1, "parent", ["child-review", "child-build"]);
    await expect(args.onForceDelete).toHaveBeenNthCalledWith(2, "parent", ["child-build"]);
    await waitFor(() => expect(page.queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...w.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  beforeEach: ({
    args
  }) => {
    mocked(args.onForceDelete).mockResolvedValue({
      success: false,
      error: "Child starts running",
      descendants: [{
        ...descendants[0],
        active: true
      }]
    });
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    }));
    await expect(await page.findByText("Child starts running")).toBeVisible();
    await expect(within(dialog).getAllByRole("button")).toHaveLength(1);
    dialog.focus();
    await userEvent.keyboard("y");
    await expect(args.onForceDelete).toHaveBeenCalledTimes(1);
    await expect(args.onClose).not.toHaveBeenCalled();
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  beforeEach: ({
    args
  }) => {
    mocked(args.onForceDelete).mockRejectedValue(new Error("Transport unavailable"));
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const page = within(canvasElement.ownerDocument.body);
    const dialog = await page.findByRole("dialog");
    await userEvent.click(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    }));
    await expect(await page.findByText("Transport unavailable")).toBeVisible();
    await expect(within(dialog).getAllByRole("listitem")).toHaveLength(2);
    await expect(within(dialog).getByRole("button", {
      name: "Delete Workspace and Descendants"
    })).toBeEnabled();
    await expect(args.onClose).not.toHaveBeenCalled();
  }
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
  args: {
    descendants: [{
      workspaceId: "child-" + "long-id-".repeat(16),
      title: "A long descendant title that must wrap inside the deletion dialog",
      active: false
    }]
  },
  play: async ({
    canvasElement,
    parameters,
    globals
  }) => {
    await expect(parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["phone"]
        }
      }
    });
    await expect(globals).toMatchObject({
      viewport: {
        value: "phone390"
      }
    });
    const dialog = await within(canvasElement.ownerDocument.body).findByRole("dialog");
    if (window.innerWidth <= 390) {
      await expect(dialog.getBoundingClientRect().left).toBeGreaterThanOrEqual(0);
      await expect(dialog.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
      await expect(dialog.scrollWidth).toBeLessThanOrEqual(dialog.clientWidth);
      const button = within(dialog).getByRole("button", {
        name: "Delete Workspace and Descendants"
      });
      await expect(button).toBeVisible();
      await expect(button.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
      await expect(within(button).getByText("Y")).not.toBeVisible();
    }
  }
}`,...u.parameters?.docs?.source}}};const k=["ExplicitScope","ActiveDescendantBlocksShortcut","RetryRefreshesScope","RetryBecomesBlocked","RejectedRetryRemainsVisible","Phone"];export{d as ActiveDescendantBlocksShortcut,r as ExplicitScope,u as Phone,g as RejectedRetryRemainsVisible,p as RetryBecomesBlocked,w as RetryRefreshesScope,k as __namedExportsOrder,f as default};
