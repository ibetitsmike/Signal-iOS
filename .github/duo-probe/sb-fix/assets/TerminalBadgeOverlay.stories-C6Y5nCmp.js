import{d as w,W as h,h as b,bB as x,j as m}from"./iframe-DwmVy7SQ.js";import{l as y}from"./meta-CT6GdK4g.js";import{T as v}from"./TerminalBadgeOverlay-xTnQK8aa.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const N=Array.from({length:14},(t,e)=>`$ build step ${e+1} … ok (${(e+1)*137}ms)`).join(`
`),_=t=>{const e=w.c(13);let a;e[0]!==t.config?(a=()=>b().updateOptimistically({userPreferences:{appearance:{terminalBadgeConfig:{...x,enabled:!0,...t.config}}}}),e[0]=t.config,e[1]=a):a=e[1],h.useState(a);let n;e[2]===Symbol.for("react.memo_cache_sentinel")?(n=[],e[2]=n):n=e[2],h.useEffect(k,n);let o;e[3]!==t.width?(o={width:t.width,maxWidth:"100%"},e[3]=t.width,e[4]=o):o=e[4];let s;e[5]===Symbol.for("react.memo_cache_sentinel")?(s={backgroundColor:"var(--color-terminal-bg)"},e[5]=s):s=e[5];let i;e[6]===Symbol.for("react.memo_cache_sentinel")?(i=m.jsx("pre",{className:"p-2 text-xs",style:{color:"var(--color-terminal-fg)"},children:N}),e[6]=i):i=e[6];const g=t.workspaceName??"fix-3607-terminal-badge",u=t.tabName??"Terminal";let r;e[7]!==g||e[8]!==u?(r=m.jsxs("div",{className:"border-border-medium relative h-64 overflow-hidden rounded border",style:s,children:[i,m.jsx(v,{workspaceName:g,projectName:"xum",tabName:u,tabIndex:0})]}),e[7]=g,e[8]=u,e[9]=r):r=e[9];let c;return e[10]!==o||e[11]!==r?(c=m.jsx("div",{className:"p-4",style:o,children:r}),e[10]=o,e[11]=r,e[12]=c):c=e[12],c},Q={...y,title:"App/Terminal/TerminalBadgeOverlay",component:_},l={args:{config:{}}},p={args:{config:{position:"bottom-left"}}},d={args:{config:{opacity:.9,fontSize:28,template:"{project}/{workspace} · {tab}"}}},f={args:{config:{},workspaceName:"extremely-long-workspace-branch-name-that-should-truncate",tabName:"very-long-osc-title-from-a-build-process"},globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}},docs:{description:{story:"Pins the phone-width contract: long workspace + tab names truncate with an ellipsis instead of overflowing the terminal surface."}}}};function T(){b().updateOptimistically({userPreferences:void 0})}function k(){return T}l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    config: {}
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    config: {
      position: "bottom-left"
    }
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    config: {
      opacity: 0.9,
      fontSize: 28,
      template: "{project}/{workspace} · {tab}"
    }
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    config: {},
    workspaceName: "extremely-long-workspace-branch-name-that-should-truncate",
    tabName: "very-long-osc-title-from-a-build-process"
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
    },
    docs: {
      description: {
        story: "Pins the phone-width contract: long workspace + tab names truncate with an ellipsis instead of overflowing the terminal surface."
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const V=["TopRightDefault","BottomLeft","HighOpacityLargeFont","LongNamesTruncatePhone"];export{p as BottomLeft,d as HighOpacityLargeFont,f as LongNamesTruncatePhone,l as TopRightDefault,V as __namedExportsOrder,Q as default};
