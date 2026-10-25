import{j as t,aK as h}from"./iframe-DpCW2UOM.js";import{c as v}from"./contrast-Bnc7IxMq.js";import{P as b,l as u}from"./meta-BwRgvoZ6.js";import{c as C}from"./orpc-DLtOjQkt.js";import{D as d}from"./AIView-CvG2HY8V.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./ConfirmationModal-DQrDMilx.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./ToggleGroup-D1Db6hA_.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./shell-ZYrtNCUY.js";import"./TimelinePanel-BSxjzr0t.js";import"./timelineReveal-B8CyznN7.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-BdgCPOKg.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./slashCommandHints-BSKyjYjN.js";const{expect:l,fn:g,within:x}=__STORYBOOK_MODULE_TEST__,f=C(),z={...u,title:"App/Chat/Components/DelegatedCreationInterruptedBanner",component:d,parameters:{...u.parameters,pixel:b},args:{workspaceId:"orphan",workspace:{name:"fix-login-redirect"},confirm:g(()=>Promise.resolve(!1)),removeWorkspace:g(()=>Promise.resolve({success:!0}))},render:e=>t.jsx(h,{client:f,children:t.jsx("div",{className:"bg-background flex min-h-[180px] items-start p-4",children:t.jsx("div",{className:"w-full max-w-3xl",children:t.jsx(d,{...e})})})})},o={},a={globals:{viewport:{value:"phone390",isRotated:!1}},render:e=>t.jsx(h,{client:f,children:t.jsx("div",{className:"bg-background w-[390px] p-2",children:t.jsx(d,{...e})})}),play:async({canvasElement:e})=>{const r=e.querySelector('[data-component="DelegatedCreationInterruptedBanner"]');await l(r).not.toBeNull(),await l(r.scrollWidth).toBeLessThanOrEqual(r.clientWidth),await l(x(e).getByRole("button",{name:"Remove workspace…"})).toBeVisible()}},m=e=>({globals:{theme:e},play:async({canvasElement:r})=>{const k=await x(r).findByRole("button",{name:"Remove workspace…"}),w=v(k).filter(s=>s.ratio<4.5).map(s=>`${s.ratio.toFixed(2)}:1 "${s.text}"`);await l(w.join(`
`)).toBe("")}}),i=m("light"),n=m("dark"),c=m("flexoki-light"),p=m("flexoki-dark");o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source},description:{story:"A delegated workspace whose creating task died before its setup finished (#4983).",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  render: args => <APIProvider client={client}>
      {/* The test-runner applies no viewport: force the phone width here. */}
      <div className="bg-background w-[390px] p-2">
        <DelegatedCreationInterruptedNotice {...args} />
      </div>
    </APIProvider>,
  play: async ({
    canvasElement
  }) => {
    const banner = canvasElement.querySelector<HTMLElement>('[data-component="DelegatedCreationInterruptedBanner"]');
    await expect(banner).not.toBeNull();
    await expect(banner!.scrollWidth).toBeLessThanOrEqual(banner!.clientWidth);
    await expect(within(canvasElement).getByRole("button", {
      name: "Remove workspace…"
    })).toBeVisible();
  }
}`,...a.parameters?.docs?.source},description:{story:"The actions wrap instead of overflowing on a phone.",...a.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:'contrastStory("light")',...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:'contrastStory("dark")',...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'contrastStory("flexoki-light")',...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'contrastStory("flexoki-dark")',...p.parameters?.docs?.source}}};const G=["Default","Phone","ContrastLight","ContrastDark","ContrastFlexokiLight","ContrastFlexokiDark"];export{n as ContrastDark,p as ContrastFlexokiDark,c as ContrastFlexokiLight,i as ContrastLight,o as Default,a as Phone,G as __namedExportsOrder,z as default};
