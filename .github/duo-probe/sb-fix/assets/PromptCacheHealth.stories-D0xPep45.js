import{j as i,S as w}from"./iframe-DwmVy7SQ.js";import{P as x,l as p}from"./meta-CT6GdK4g.js";import{P as l}from"./RightSidebar-BQa1W4kD.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";const{expect:r,within:h}=__STORYBOOK_MODULE_TEST__,s=6e4,o=w,g=[{messageId:"turn-4",timestamp:o-2.5*s,readRatio:.96,cacheWriteTokens:3200,rewriteCostUsd:.0128,coldStart:!1},{messageId:"turn-3",timestamp:o-7.5*s,readRatio:.91,cacheWriteTokens:8400,rewriteCostUsd:.0336,coldStart:!1},{messageId:"turn-2",timestamp:o-72.5*s,readRatio:.02,cacheWriteTokens:118e3,rewriteCostUsd:.472,coldStart:!0},{messageId:"turn-1",timestamp:o-75.5*s,readRatio:.88,cacheWriteTokens:12e3,rewriteCostUsd:.048,coldStart:!1}],u={readRatio:.71,cacheWriteTokens:141600,rewriteCostUsd:.5664,coldStart:!1},D={...p,title:"Features/RightSidebar/PromptCacheHealth",component:l,args:{session:u,turns:g},parameters:{...p.parameters,pixel:x}},a={render:t=>i.jsx("div",{className:"bg-background text-light font-primary w-[350px] p-4 text-[13px]",children:i.jsx(l,{...t})}),play:async({canvasElement:t})=>{const e=h(t);await r(e.getAllByRole("row")).toHaveLength(g.length+1),await r(e.getAllByText("cold")).toHaveLength(1)}},m=390,n={globals:{viewport:{value:"mobile1",isRotated:!1}},render:t=>i.jsx("div",{"data-testid":"phone-width-frame",className:"bg-background text-light font-primary p-2 text-[13px]",style:{width:m},children:i.jsx(l,{...t})}),play:async({canvasElement:t})=>{const e=h(t),c=e.getByTestId("phone-width-frame"),d=e.getByTestId("prompt-cache-turns");await r(c.getBoundingClientRect().width).toBe(m),await r(d.scrollWidth).toBeLessThanOrEqual(d.clientWidth),await r(c.scrollWidth).toBeLessThanOrEqual(c.clientWidth)}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <div className="bg-background text-light font-primary w-[350px] p-4 text-[13px]">
      <PromptCacheHealth {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getAllByRole("row")).toHaveLength(TURNS.length + 1);
    await expect(canvas.getAllByText("cold")).toHaveLength(1);
  }
}`,...a.parameters?.docs?.source},description:{story:"Costs tab section at a typical right-sidebar width.",...a.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  // The Storybook test runner ignores \`globals.viewport\` and plays at desktop size, so the
  // wrapper itself pins the phone width for the overflow check below.
  render: args => <div data-testid="phone-width-frame" className="bg-background text-light font-primary p-2 text-[13px]" style={{
    width: PHONE_WIDTH_PX
  }}>
      <PromptCacheHealth {...args} />
    </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const frame = canvas.getByTestId("phone-width-frame");
    const table = canvas.getByTestId("prompt-cache-turns");
    await expect(frame.getBoundingClientRect().width).toBe(PHONE_WIDTH_PX);
    // No right-edge overflow: neither the table nor its frame scrolls sideways.
    await expect(table.scrollWidth).toBeLessThanOrEqual(table.clientWidth);
    await expect(frame.scrollWidth).toBeLessThanOrEqual(frame.clientWidth);
  }
}`,...n.parameters?.docs?.source}}};const M=["SidebarWidth","PhoneWidth"];export{n as PhoneWidth,a as SidebarWidth,M as __namedExportsOrder,D as default};
