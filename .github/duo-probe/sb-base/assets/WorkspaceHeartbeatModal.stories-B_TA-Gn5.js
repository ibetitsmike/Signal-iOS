import{j as l,d as E,bC as M,bD as S,aK as L}from"./iframe-C48Cgo5e.js";import{P as k}from"./meta-BMDQogfB.js";import{W as f}from"./index-BD6ZzPZS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./heartbeatIntervalMinutes-DJ7FVQVL.js";const{waitFor:h,within:d}=__STORYBOOK_MODULE_TEST__,v="ws-heartbeat-layout",y=["Recurring needs-triage reconcile for coder/agent-tty.","Desired state: every open GitHub issue with `needs-triage` and without `triage:ongoing` / `triage:done` has exactly one triage workspace.","Actual-state reads before side effects; archive stale duplicate workspaces; launch missing ones; report the workspace IDs and next blocking decision."].join(" ");function D(e,t=!1){return{workspace:{heartbeat:{get:()=>Promise.resolve(e),set:()=>Promise.resolve({success:!0,data:void 0})}},config:{getConfig:()=>t?Promise.reject(new Error("config unavailable")):Promise.resolve({heartbeatDefaultIntervalMs:S,heartbeatDefaultPrompt:"Review current progress and decide whether to continue."})}}}function R(){return{workspaceMetadata:new Map,loading:!1,loaded:!0,loadError:null,setWorkspaceMetadata:()=>{}}}const w={enabled:!0,intervalMs:7*6e4,contextMode:"compact",message:y},x={...w,enabled:!1},H={...w,contextMode:"normal",trigger:"interval",whenBusy:"tool-end"};function B(e){const t=E.c(9);let a;t[0]!==e.configFails||t[1]!==e.settings?(a=D(e.settings,e.configFails),t[0]=e.configFails,t[1]=e.settings,t[2]=a):a=t[2];let o;t[3]===Symbol.for("react.memo_cache_sentinel")?(o=R(),t[3]=o):o=t[3];let n;t[4]!==e.children?(n=l.jsx(M.Provider,{value:o,children:l.jsx("div",{className:"bg-background min-h-screen",children:e.children})}),t[4]=e.children,t[5]=n):n=t[5];let r;return t[6]!==a||t[7]!==n?(r=l.jsx(L,{client:a,children:n}),t[6]=a,t[7]=n,t[8]=r):r=t[8],r}function s(e=w,t=!1){return l.jsx(B,{settings:e,configFails:t,children:l.jsx(f,{workspaceId:v,open:!0,onOpenChange:()=>{}})})}async function i(e){const a=await d(e.ownerDocument.body).findByRole("dialog",{name:"Configure heartbeat"}),o=d(a);await h(()=>{const n=o.getByLabelText("Heartbeat message");if(!(n instanceof HTMLTextAreaElement))throw new Error("Expected heartbeat message field to be a textarea");if(n.value!==y)throw new Error("Expected long heartbeat message to load before snapshotting")})}const te={title:"Components/WorkspaceHeartbeatModal",component:f,args:{workspaceId:v,open:!0,onOpenChange:()=>{}},parameters:{layout:"fullscreen"}},c={globals:{viewport:{value:"desktop",isRotated:!1}},render:()=>s(),play:async({canvasElement:e})=>{await i(e)}},p={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},render:()=>s(),play:async({canvasElement:e})=>{await i(e)}},g={globals:{viewport:{value:"desktop",isRotated:!1}},render:()=>s(x),play:async({canvasElement:e})=>{await i(e)}},m={globals:{viewport:{value:"desktop",isRotated:!1}},render:()=>s(H),play:async({canvasElement:e})=>{await i(e);const a=await d(e.ownerDocument.body).findByRole("dialog",{name:"Configure heartbeat"}),o=d(a);await h(()=>{const n=o.getByLabelText("Heartbeat trigger");if(!(n instanceof HTMLSelectElement)||n.value!=="interval")throw new Error("Expected fixed-schedule trigger to load before snapshotting");const r=o.getByLabelText("Heartbeat when busy");if(!(r instanceof HTMLSelectElement)||r.value!=="tool-end")throw new Error("Expected explicit when-busy mode to load before snapshotting")})}},u={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},render:()=>s(x),play:async({canvasElement:e})=>{await i(e)}},b={globals:{viewport:{value:"desktop",isRotated:!1}},parameters:{pixel:k},render:()=>s(w,!0),play:async({canvasElement:e})=>{await i(e);const a=(await d(e.ownerDocument.body).findByRole("dialog",{name:"Configure heartbeat"})).textContent??"";if(!a.includes("Valid range:"))throw new Error("Expected the heartbeat intro to render");if(a.includes("Workspaces without their own interval use"))throw new Error("Expected no global default sentence when the config cannot load")}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  render: () => renderOpenModal(),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
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
  render: () => renderOpenModal(),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  render: () => renderOpenModal(disabledLongMessageSettings),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  render: () => renderOpenModal(fixedScheduleSettings),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);

    // Contract: the non-default schedule loads into the new selects before snapshotting.
    const body = within(canvasElement.ownerDocument.body);
    const dialog = await body.findByRole("dialog", {
      name: "Configure heartbeat"
    });
    const modal = within(dialog);
    await waitFor(() => {
      const triggerSelect = modal.getByLabelText("Heartbeat trigger");
      if (!(triggerSelect instanceof HTMLSelectElement) || triggerSelect.value !== "interval") {
        throw new Error("Expected fixed-schedule trigger to load before snapshotting");
      }
      const whenBusySelect = modal.getByLabelText("Heartbeat when busy");
      if (!(whenBusySelect instanceof HTMLSelectElement) || whenBusySelect.value !== "tool-end") {
        throw new Error("Expected explicit when-busy mode to load before snapshotting");
      }
    });
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
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
  render: () => renderOpenModal(disabledLongMessageSettings),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "desktop",
      isRotated: false
    }
  },
  parameters: {
    pixel: PIXEL_DISABLED
  },
  render: () => renderOpenModal(enabledLongMessageSettings, true),
  play: async ({
    canvasElement
  }) => {
    await assertHeartbeatModalLoaded(canvasElement);
    const dialog = await within(canvasElement.ownerDocument.body).findByRole("dialog", {
      name: "Configure heartbeat"
    });
    const text = dialog.textContent ?? "";
    if (!text.includes("Valid range:")) {
      throw new Error("Expected the heartbeat intro to render");
    }
    if (text.includes("Workspaces without their own interval use")) {
      throw new Error("Expected no global default sentence when the config cannot load");
    }
  }
}`,...b.parameters?.docs?.source}}};const ae=["LongMessageDesktop","LongMessageMobile","DisabledLongMessageDesktop","FixedScheduleDesktop","DisabledLongMessageMobile","ConfigUnavailableDesktop"];export{b as ConfigUnavailableDesktop,g as DisabledLongMessageDesktop,u as DisabledLongMessageMobile,m as FixedScheduleDesktop,c as LongMessageDesktop,p as LongMessageMobile,ae as __namedExportsOrder,te as default};
