import{j as p,d as u,W as f,bZ as w,S as g,aK as R}from"./iframe-C48Cgo5e.js";import{f as E}from"./AIView-DjCOVpt_.js";import{l as x}from"./meta-BMDQogfB.js";import{c as S}from"./orpc-qlMSh58E.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";const{waitFor:_}=__STORYBOOK_MODULE_TEST__,l=200,C=170,T={type:"stream-error",id:"error-overloaded",historyId:"error-overloaded",error:"Anthropic is temporarily overloaded (HTTP 529). Please try again later.",errorType:"server_error",historySequence:2,timestamp:g,model:"anthropic:claude-sonnet-4-5",errorCount:3},y={type:"stream-error",id:"error-quota",historyId:"error-quota",error:"You exceeded your current quota. Check your plan and billing details.",errorType:"quota",historySequence:3,timestamp:g,model:"openai:gpt-5",errorCount:3};function N(){const e=u.c(6),[t]=f.useState(v);let a,n,i;e[0]===Symbol.for("react.memo_cache_sentinel")?(a={width:l},n=p.jsx(w,{message:T}),i=p.jsx(w,{message:y}),e[0]=a,e[1]=n,e[2]=i):(a=e[0],n=e[1],i=e[2]);let o;e[3]===Symbol.for("react.memo_cache_sentinel")?(o=p.jsxs("div",{"data-narrow-pane":!0,className:"p-3",style:a,children:[n,i,p.jsx(E,{workspaceId:"ws-narrow",messages:[y],autoRetryStatus:null,isStreamStarting:!1,canInterrupt:!1})]}),e[3]=o):o=e[3];let r;return e[4]!==t?(r=p.jsx(R,{client:t,children:o}),e[4]=t,e[5]=r):r=e[5],r}function v(){return S()}const X={...x,title:"Features/Messages/StreamErrorMessage"},d={globals:{viewport:{value:"mobile1",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark"],viewports:["phone"]}}},render:()=>p.jsx(N,{}),play:async({canvasElement:e})=>{const t=e.querySelector("[data-narrow-pane]");if(!t)throw new Error("Narrow pane did not render");await _(()=>{if(!t.textContent?.includes("Retry"))throw new Error("Retry barrier did not render")});const a=t.getBoundingClientRect();if(a.width!==l)throw new Error(`Pane is ${a.width}px wide; expected ${l}px`);const n=[...t.children].at(-1);if(!(n instanceof HTMLElement)||!n.textContent?.includes("Retry"))throw new Error("The retry card is not the pane's last child");const i=o=>{for(const r of o.querySelectorAll("*")){const s=r.getBoundingClientRect(),c=r.parentElement;if(s.width===0||!c)continue;const h=getComputedStyle(c),m=c.getBoundingClientRect().right-parseFloat(h.paddingRight)-parseFloat(h.borderRightWidth);if(s.right>m+.5)return`${t.style.width} pane: <${r.tagName.toLowerCase()} class="${r.className.toString()}"> ends at ${s.right}px, past its parent's content box (right edge ${m}px)`}return null};try{for(const[o,r]of[[l,t],[C,n]]){t.style.width=`${o}px`;const s=i(r);if(s)throw new Error(s)}}finally{t.style.width=`${l}px`}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "mobile1",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark"],
        viewports: ["phone"]
      }
    }
  },
  render: () => <NarrowPane />,
  play: async ({
    canvasElement
  }) => {
    const pane = canvasElement.querySelector<HTMLElement>("[data-narrow-pane]");
    if (!pane) throw new Error("Narrow pane did not render");
    await waitFor(() => {
      if (!pane.textContent?.includes("Retry")) throw new Error("Retry barrier did not render");
    });
    const paneRect = pane.getBoundingClientRect();
    if (paneRect.width !== NARROW_PANE_WIDTH) {
      throw new Error(\`Pane is \${paneRect.width}px wide; expected \${NARROW_PANE_WIDTH}px\`);
    }
    // Nothing may reach into its parent's right padding. In the webview, Retry with its shortcut
    // hint ran into the retry card's padding in a narrow sidebar (#5645), so the retry card is also
    // checked at the narrowest sidebar; then the width is restored for the snapshot.
    const retryCard = [...pane.children].at(-1);
    if (!(retryCard instanceof HTMLElement) || !retryCard.textContent?.includes("Retry")) {
      throw new Error("The retry card is not the pane's last child");
    }
    const overflows = (root: HTMLElement) => {
      for (const element of root.querySelectorAll<HTMLElement>("*")) {
        const rect = element.getBoundingClientRect();
        const parent = element.parentElement;
        if (rect.width === 0 || !parent) continue;
        const parentStyle = getComputedStyle(parent);
        const contentRight = parent.getBoundingClientRect().right - parseFloat(parentStyle.paddingRight) - parseFloat(parentStyle.borderRightWidth);
        if (rect.right > contentRight + 0.5) {
          return \`\${pane.style.width} pane: <\${element.tagName.toLowerCase()} \` + \`class="\${element.className.toString()}"> ends at \${rect.right}px, past its parent's \` + \`content box (right edge \${contentRight}px)\`;
        }
      }
      return null;
    };
    try {
      for (const [width, root] of [[NARROW_PANE_WIDTH, pane], [VSCODE_MIN_SIDEBAR_WIDTH, retryCard]] as const) {
        pane.style.width = \`\${width}px\`;
        const overflow = overflows(root);
        if (overflow) throw new Error(overflow);
      }
    } finally {
      pane.style.width = \`\${NARROW_PANE_WIDTH}px\`;
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Narrow-pane contract (#5151, #5645): the error cards' header actions and the retry card's Retry
wrap instead of overflowing a VS Code sidebar-sized pane with the transcript's padding. The pane has a fixed width, so the fit
holds at any window size, including the desktop-sized test-runner; Pixel pins the phone viewport.`,...d.parameters?.docs?.description}}};const ee=["NarrowPane200"];export{d as NarrowPane200,ee as __namedExportsOrder,X as default};
