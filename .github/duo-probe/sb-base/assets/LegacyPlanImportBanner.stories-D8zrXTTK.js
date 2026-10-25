import{j as o,aK as w}from"./iframe-C48Cgo5e.js";import{c as v}from"./contrast-Bnc7IxMq.js";import{P as k,l as g}from"./meta-BMDQogfB.js";import{c as B}from"./orpc-qlMSh58E.js";import{L as h}from"./AIView-DjCOVpt_.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./ConfirmationModal-U5ga5P62.js";import"./sendDispatchModes-lGqqrDnb.js";import"./ToggleGroup-DFNW6RD-.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./shell-ThN3C2Ao.js";import"./TimelinePanel-B2d7l6J_.js";import"./timelineReveal-CIzBeIqc.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./slashCommandHints-BSKyjYjN.js";const{expect:a,fn:b,userEvent:I,within:u}=__STORYBOOK_MODULE_TEST__,x=B(),J={...g,title:"App/Chat/Components/LegacyPlanImportBanner",component:h,parameters:{...g.parameters,pixel:k},args:{workspaceId:"older-ssh-row",legacyPlanPath:"/home/dev/.mux/plans/checkout-service/feature-login-x7k2.md",onSettled:b()},render:e=>o.jsx(w,{client:x,children:o.jsx("div",{className:"bg-background flex min-h-[160px] items-start p-4",children:o.jsx("div",{className:"w-full max-w-3xl",children:o.jsx(h,{...e})})})})},r={},s={globals:{viewport:{value:"phone390",isRotated:!1}},render:e=>o.jsx(w,{client:x,children:o.jsx("div",{className:"bg-background w-[375px] p-2",children:o.jsx(h,{...e})})}),play:async({canvasElement:e})=>{const t=e.querySelector('[data-component="LegacyPlanImportBanner"]');await a(t).not.toBeNull(),await a(t.scrollWidth).toBeLessThanOrEqual(t.clientWidth),await a(u(e).getByRole("button",{name:"Import plan"})).toBeVisible()}},n={play:async({canvasElement:e})=>{const t=u(e);await I.click(t.getByRole("button",{name:"Import plan"})),await a(await t.findByRole("alert")).toHaveTextContent("The plan from an older Xum is no longer there."),await a(t.queryByRole("button",{name:"Import plan"})).toBeNull()}},d=e=>({globals:{theme:e},play:async({canvasElement:t})=>{const y=await u(t).findByRole("button",{name:"Import plan"}),f=v(y).filter(i=>i.ratio<4.5).map(i=>`${i.ratio.toFixed(2)}:1 "${i.text}"`);await a(f.join(`
`)).toBe("")}}),c=d("light"),p=d("dark"),l=d("flexoki-light"),m=d("flexoki-dark");r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:"{}",...r.parameters?.docs?.source},description:{story:"An SSH workspace from before #5174 whose only plan is at the shared pre-#5174 path.",...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  render: args => <APIProvider client={client}>
      {/* The test-runner applies no viewport: force the phone width here. */}
      <div className="bg-background w-[375px] p-2">
        <LegacyPlanImportNotice {...args} />
      </div>
    </APIProvider>,
  play: async ({
    canvasElement
  }) => {
    const row = canvasElement.querySelector<HTMLElement>('[data-component="LegacyPlanImportBanner"]');
    await expect(row).not.toBeNull();
    await expect(row!.scrollWidth).toBeLessThanOrEqual(row!.clientWidth);
    await expect(within(canvasElement).getByRole("button", {
      name: "Import plan"
    })).toBeVisible();
  }
}`,...s.parameters?.docs?.source},description:{story:"The long host path wraps instead of overflowing on a phone.",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole("button", {
      name: "Import plan"
    }));
    await expect(await canvas.findByRole("alert")).toHaveTextContent("The plan from an older Xum is no longer there.");
    await expect(canvas.queryByRole("button", {
      name: "Import plan"
    })).toBeNull();
  }
}`,...n.parameters?.docs?.source},description:{story:`The shared file vanished after it was offered (#5620): the import finds nothing, so the notice
keeps the reason and drops the button (and its palette action).`,...n.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:'contrastStory("light")',...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:'contrastStory("dark")',...p.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:'contrastStory("flexoki-light")',...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:'contrastStory("flexoki-dark")',...m.parameters?.docs?.source}}};const Q=["Default","Phone","NothingToImport","ContrastLight","ContrastDark","ContrastFlexokiLight","ContrastFlexokiDark"];export{p as ContrastDark,m as ContrastFlexokiDark,l as ContrastFlexokiLight,c as ContrastLight,r as Default,n as NothingToImport,s as Phone,Q as __namedExportsOrder,J as default};
