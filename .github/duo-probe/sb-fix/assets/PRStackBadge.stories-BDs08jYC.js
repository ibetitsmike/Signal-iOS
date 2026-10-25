import{j as t}from"./iframe-DwmVy7SQ.js";import{l as c}from"./meta-CT6GdK4g.js";import{b as n}from"./AIView-Cw4ZT1Fh.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./ConfirmationModal-C1groiNk.js";import"./sendDispatchModes-BJ8PBEam.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./shell-NsnPoeBt.js";import"./TimelinePanel-B7hLQBAD.js";import"./timelineReveal-HqQYIr77.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./slashCommandHints-BSKyjYjN.js";const{userEvent:m,within:l}=__STORYBOOK_MODULE_TEST__,r={trunk:"main",branches:[{branch:"mike/stack-foundation",isCurrent:!1,needsRebase:!1,pr:{number:28051,url:"https://github.com/coder/mux/pull/28051",state:"MERGED",title:"feat: add the stack foundation"}},{branch:"mike/stack-store",isCurrent:!1,needsRebase:!1,pr:{number:28052,url:"https://github.com/coder/mux/pull/28052",state:"OPEN",title:"feat: cache stack metadata for visible workspaces"}},{branch:"mike/stack-menu",isCurrent:!0,needsRebase:!1,pr:{number:28053,url:"https://github.com/coder/mux/pull/28053",state:"OPEN",title:"feat: add a pull request stack dropdown with long titles",isDraft:!0}},{branch:"mike/stack-responsive",isCurrent:!1,needsRebase:!0,pr:{number:28054,url:"https://github.com/coder/mux/pull/28054",state:"OPEN",title:"fix: keep the stack menu inside narrow viewports"}},{branch:"mike/stack-submit",isCurrent:!1,needsRebase:!1},{branch:"mike/stack-queue",isCurrent:!1,needsRebase:!1,pr:{number:28056,url:"https://github.com/coder/mux/pull/28056",state:"QUEUED",title:"feat: finish stack awareness"}}]},B={...c,title:"App/Header/PRStackBadge",component:n};async function i(e){const o=l(e);await m.click(o.getByRole("button",{name:"View stack with 6 branches"}))}const a={args:{stack:r,menuDirection:"down"},render:e=>t.jsx("div",{className:"bg-background min-h-96 p-6",children:t.jsx("div",{className:"flex justify-end",children:t.jsx(n,{...e})})}),play:async({canvasElement:e})=>i(e)},s={args:{stack:r,menuDirection:"down"},globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},render:e=>t.jsx("div",{className:"bg-background min-h-96 w-full p-2",children:t.jsx("div",{className:"flex justify-end",children:t.jsx(n,{...e})})}),play:async({canvasElement:e})=>i(e)};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    stack: STACK,
    menuDirection: "down"
  },
  render: args => <div className="bg-background min-h-96 p-6">
      <div className="flex justify-end">
        <PRStackBadge {...args} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => openStackMenu(canvasElement)
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    stack: STACK,
    menuDirection: "down"
  },
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
  render: args => <div className="bg-background min-h-96 w-full p-2">
      <div className="flex justify-end">
        <PRStackBadge {...args} />
      </div>
    </div>,
  play: async ({
    canvasElement
  }) => openStackMenu(canvasElement)
}`,...s.parameters?.docs?.source}}};const M=["SixLayerStack","PhoneWidth"];export{s as PhoneWidth,a as SixLayerStack,M as __namedExportsOrder,B as default};
