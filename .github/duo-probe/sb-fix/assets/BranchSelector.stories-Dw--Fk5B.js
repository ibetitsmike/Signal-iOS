import{j as y,s as f,e as b,a as v,c as w}from"./iframe-DwmVy7SQ.js";import{a as h,P as S,A as g}from"./meta-CT6GdK4g.js";import{c as x}from"./git-Ekgdg9se.js";import{c as B}from"./orpc-sAt07-6s.js";import{c as C,g as R}from"./workspaces-DVCSHIwS.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-DEovgEig.js";const{expect:c,fn:k,waitFor:d,within:P}=__STORYBOOK_MODULE_TEST__,re={...h,title:"Components/BranchSelector"},l="feature/copy-branch";function O(){const r=C({id:"branch-copy-1",name:l,projectName:"mux",createdAt:"2023-11-14T22:13:20.000Z"}),n=R([r]);f(r),b([...n.keys()]),v(),w();const t=x();return B({projects:n,workspaces:[r],executeBash:async(o,a)=>{const e=await t(o,a);return!a.includes("---HEAD_BRANCH---")||!e.success?e:{...e,output:`---HEAD_BRANCH---
${l}
${e.output}`}}})}function E(r){const n=(t,o,a)=>{for(const e of t){const p=e instanceof CSSStyleRule?e.selectorText:o,u=a||e instanceof CSSMediaRule&&e.conditionText.includes("pointer: coarse"),m=e instanceof CSSStyleRule||e instanceof CSSNestedDeclarations?e.style:null;if(u&&p&&m?.opacity&&r.matches(p)){const i=m.opacity.trim();return i.endsWith("%")?Number.parseFloat(i)/100:Number.parseFloat(i)}if("cssRules"in e&&e.cssRules instanceof CSSRuleList){const i=n(e.cssRules,p,u);if(i!==null)return i}}return null};for(const t of document.styleSheets){const o=n(t.cssRules,null,!1);if(o!==null)return o}return null}const s={parameters:{...h.parameters,pixel:S},render:()=>y.jsx(g,{setup:O}),play:async({canvasElement:r})=>{const t=await P(r).findByRole("button",{name:"Copy branch name"},{timeout:1e4});await c(E(t)).toBe(1);const o=Object.getOwnPropertyDescriptor(navigator,"clipboard"),a=k().mockResolvedValue(void 0);Object.defineProperty(navigator,"clipboard",{configurable:!0,value:{writeText:a}});try{t.click(),await d(()=>c(a).toHaveBeenCalledWith(l)),await d(async()=>{await c(t.querySelector(".lucide-check")).not.toBeNull(),await c(getComputedStyle(t).opacity).toBe("1")})}finally{o?Object.defineProperty(navigator,"clipboard",o):Reflect.deleteProperty(navigator,"clipboard")}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={setupBranchWorkspace} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByRole("button", {
      name: "Copy branch name"
    }, {
      timeout: 10_000
    });
    await expect(coarsePointerOpacity(button)).toBe(1);
    const originalClipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");
    const writeText = fn<(text: string) => Promise<void>>().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", {
      configurable: true,
      value: {
        writeText
      }
    });
    try {
      button.click();
      await waitFor(() => expect(writeText).toHaveBeenCalledWith(BRANCH));
      await waitFor(async () => {
        await expect(button.querySelector(".lucide-check")).not.toBeNull();
        await expect(getComputedStyle(button).opacity).toBe("1");
      });
    } finally {
      if (originalClipboard) Object.defineProperty(navigator, "clipboard", originalClipboard);else Reflect.deleteProperty(navigator, "clipboard");
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`The footer "Copy branch name" button is hover-revealed on mouse pointers. Touch users have no
hover, so it must be visible on coarse pointers, and a copy must show its check icon without
relying on hover or the tooltip.

Neither Pixel nor the Storybook test-runner emulates touch, so \`pointer: coarse\` never matches
here. Instead the play reads the loaded stylesheets and asserts that a coarse-pointer media rule
whose selector matches this button sets it to full opacity. Removing the class, or breaking its
media condition, fails the story. The copy confirmation is checked directly: the click is
dispatched without moving the pointer, so hover cannot reveal it.`,...s.parameters?.docs?.description}}};const ae=["CopyBranchNameWithoutHover"];export{s as CopyBranchNameWithoutHover,ae as __namedExportsOrder,re as default};
