import{d as h,W as w,j as r,aK as B,I as b}from"./iframe-C48Cgo5e.js";import{l as x,P as f,f as R,u as k,g as v}from"./meta-BMDQogfB.js";import{c as C}from"./orpc-qlMSh58E.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";const{expect:i,userEvent:y,waitFor:D,within:a}=__STORYBOOK_MODULE_TEST__;function E(){const t=h.c(5),e=k();let n;t[0]!==e.open?(n=r.jsx(b,{onClick:e.open,children:"Open About"}),t[0]=e.open,t[1]=n):n=t[1];let o;t[2]===Symbol.for("react.memo_cache_sentinel")?(o=r.jsx(v,{}),t[2]=o):o=t[2];let s;return t[3]!==n?(s=r.jsxs(r.Fragment,{children:[n,o]}),t[3]=n,t[4]=s):s=t[4],s}function I(t){const e=h.c(5);let n;e[0]!==t.status?(n=()=>C({updateStatus:t.status,updateChannel:"nightly",updateChannels:["stable","nightly","npm"]}),e[0]=t.status,e[1]=n):n=e[1];const[o]=w.useState(n);let s;e[2]===Symbol.for("react.memo_cache_sentinel")?(s=r.jsx(R,{children:r.jsx(E,{})}),e[2]=s):s=e[2];let c;return e[3]!==o?(c=r.jsx(B,{client:o,children:s}),e[3]=o,e[4]=c):c=e[4],c}const m={...x,title:"Features/About/Server updates",component:I,play:async({canvasElement:t})=>{await y.click(a(t).getByRole("button",{name:"Open About"}))}},d={args:{status:{type:"unsupported",reason:"Server updates require a supervisor configured to restart after exit"}},play:async t=>{await m.play(t);const e=await a(document.body).findByRole("dialog");await i(a(e).queryByRole("button",{name:"Install & restart"})).not.toBeInTheDocument(),await i(a(e).queryByRole("button",{name:"Check for Updates"})).not.toBeInTheDocument()}},p={args:{status:{type:"downloading",percent:null}},play:async t=>{await m.play(t);const e=await a(document.body).findByRole("dialog");await i(a(e).getByRole("button",{name:"Check for Updates"})).toBeDisabled()}},u={args:{status:{type:"restarting",info:{version:"0.29.0"}}},play:async t=>{await m.play(t),await D(()=>i(a(document.body).queryByRole("dialog")).not.toBeInTheDocument())}},g={args:{status:{type:"install-blocked",info:{version:"0.28.4-next.123.g123456789"},blockers:[{kind:"pending-turns",count:2},{kind:"terminals",count:1},{kind:"held-inputs",count:4,workspaceNames:["Archived: migrate the storage layer to…","Fix settings validation","Rename the CLI flags","Update docs"]}]}},parameters:{pixel:{matrix:{viewports:["phone"]}}},globals:{viewport:{value:"mobile1",isRotated:!1}},play:async t=>{await m.play(t);const e=await a(document.body).findByRole("dialog"),n=a(e).getByRole("button",{name:"Install & restart"});await i(n).toBeEnabled(),await i(a(e).getByRole("button",{name:"Restart anyway"})).toBeEnabled(),await i(a(e).getByRole("status")).toBeVisible(),await i(a(e).getByRole("status")).toHaveTextContent("Sessions with unsent messages: 4 (Archived: migrate the storage layer to…, Fix settings validation, Rename the CLI flags and 1 more)");const o=a(e).getByRole("radio",{name:"Newest npm"});await y.click(o),await i(o).toHaveAttribute("aria-checked","true"),window.innerWidth<=440&&(await i(e.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth),await i(o.getBoundingClientRect().right).toBeLessThanOrEqual(e.getBoundingClientRect().right),await i(n.getBoundingClientRect().right).toBeLessThanOrEqual(e.getBoundingClientRect().right))}},l={args:{status:{type:"install-blocked",info:{version:"0.28.4-next.123.g123456789"},blockers:[{kind:"held-inputs",count:2,workspaceNames:["Migrate the storage layer to the new sc… (a1b2c3d4e5)","Migrate the storage layer to the new sc… (f6a7b8c9d0)"]}]}},parameters:{pixel:f}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      type: "unsupported",
      reason: "Server updates require a supervisor configured to restart after exit"
    }
  },
  play: async context => {
    await meta.play(context);
    const dialog = await within(document.body).findByRole("dialog");
    await expect(within(dialog).queryByRole("button", {
      name: "Install & restart"
    })).not.toBeInTheDocument();
    await expect(within(dialog).queryByRole("button", {
      name: "Check for Updates"
    })).not.toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      type: "downloading",
      percent: null
    }
  },
  play: async context => {
    await meta.play(context);
    const dialog = await within(document.body).findByRole("dialog");
    await expect(within(dialog).getByRole("button", {
      name: "Check for Updates"
    })).toBeDisabled();
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      type: "restarting",
      info: {
        version: "0.29.0"
      }
    }
  },
  play: async context => {
    await meta.play(context);
    // The dialog hands the screen to the restart cover as soon as the restarting status lands,
    // releasing its focus trap; the mock emits that status on subscribe, right after opening.
    await waitFor(() => expect(within(document.body).queryByRole("dialog")).not.toBeInTheDocument());
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      type: "install-blocked",
      info: {
        version: "0.28.4-next.123.g123456789"
      },
      blockers: [{
        kind: "pending-turns",
        count: 2
      }, {
        kind: "terminals",
        count: 1
      },
      // #4770: held inputs name their workspaces (an archived one shows them only when opened).
      {
        kind: "held-inputs",
        count: 4,
        // Beyond three names the line collapses into a count, keeping the dialog bounded. The
        // backend cuts long names (nameRestartBlockerWorkspaces), as in the first entry.
        workspaceNames: ["Archived: migrate the storage layer to…", "Fix settings validation", "Rename the CLI flags", "Update docs"]
      }]
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  play: async context => {
    await meta.play(context);
    const dialog = await within(document.body).findByRole("dialog");
    const retry = within(dialog).getByRole("button", {
      name: "Install & restart"
    });
    await expect(retry).toBeEnabled();
    await expect(within(dialog).getByRole("button", {
      name: "Restart anyway"
    })).toBeEnabled();
    await expect(within(dialog).getByRole("status")).toBeVisible();
    await expect(within(dialog).getByRole("status")).toHaveTextContent("Sessions with unsent messages: 4 (Archived: migrate the storage layer to…, Fix settings validation, Rename the CLI flags and 1 more)");
    const npm = within(dialog).getByRole("radio", {
      name: "Newest npm"
    });
    await userEvent.click(npm);
    await expect(npm).toHaveAttribute("aria-checked", "true");
    if (window.innerWidth <= 440) {
      await expect(dialog.getBoundingClientRect().right).toBeLessThanOrEqual(window.innerWidth);
      await expect(npm.getBoundingClientRect().right).toBeLessThanOrEqual(dialog.getBoundingClientRect().right);
      await expect(retry.getBoundingClientRect().right).toBeLessThanOrEqual(dialog.getBoundingClientRect().right);
    }
  }
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    status: {
      type: "install-blocked",
      info: {
        version: "0.28.4-next.123.g123456789"
      },
      blockers: [{
        kind: "held-inputs",
        count: 2,
        workspaceNames: ["Migrate the storage layer to the new sc… (a1b2c3d4e5)", "Migrate the storage layer to the new sc… (f6a7b8c9d0)"]
      }]
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  }
}`,...l.parameters?.docs?.source},description:{story:`#5052: two long titles that the backend cut to the same text keep their disambiguating ID
(nameRestartBlockerWorkspaces cuts before appending it). Visual evidence only: Pixel is off
because the snapshot budget is at its cap, and BlockedPhone already covers this layout.`,...l.parameters?.docs?.description}}};const ee=["Unsupported","Downloading","RestartingClosesDialog","BlockedPhone","BlockedDuplicateNames"];export{l as BlockedDuplicateNames,g as BlockedPhone,p as Downloading,u as RestartingClosesDialog,d as Unsupported,ee as __namedExportsOrder,m as default};
