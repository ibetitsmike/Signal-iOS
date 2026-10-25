import{j as u,S as i}from"./iframe-C48Cgo5e.js";import{a as n,P as l,A as d}from"./meta-BMDQogfB.js";import{a as h,c as w}from"./messages-Bf7rPDB1.js";import{s as k}from"./chatSetup--9T4hSMU.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{expect:f,userEvent:g,waitFor:S,within:o}=__STORYBOOK_MODULE_TEST__,Y={...n,title:"App/WorkspaceFooter"},y=JSON.stringify({trunk:"main",branches:[{name:"mike/stack-base",isCurrent:!1,isMerged:!0,isQueued:!1,needsRebase:!1,pr:{number:30019,state:"MERGED",url:"https://github.com/coder/xum/pull/30019"}},{name:"mike/stack-menu",isCurrent:!0,isMerged:!1,isQueued:!1,needsRebase:!1,pr:{number:30021,state:"OPEN",url:"https://github.com/coder/xum/pull/30021"}},{name:"mike/stack-top",isCurrent:!1,isMerged:!1,isQueued:!1,needsRebase:!1}]}),s={render:()=>u.jsx(d,{setup:()=>k({workspaceId:"ws-footer-stack",workspaceName:"stack-menu",projectName:"xum",executeBash:(a,r)=>Promise.resolve({success:!0,output:r.includes("gh stack view")?y:"",exitCode:0,wall_duration_ms:5}),messages:[h("msg-1","Show me the stack",{historySequence:1,timestamp:i-6e4}),w("msg-2","It has three layers.",{historySequence:2,timestamp:i-5e4})]})}),parameters:{...n.parameters,pixel:l},play:async({canvasElement:a})=>{const r=await S(()=>{const e=a.querySelector('[data-testid="workspace-footer-bar"]');if(!e)throw new Error("Footer not rendered");return e},{timeout:1e4}),m=await o(r).findByRole("button",{name:"View stack with 3 branches"},{timeout:1e4});await g.click(m);const c=await o(document.body).findByRole("menu",{name:"Pull request stack"});for(const e of o(c).getAllByRole("menuitem")){const t=e.getBoundingClientRect(),p=document.elementFromPoint(t.left+t.width/2,t.top+t.height/2);await f(e.contains(p)).toBe(!0)}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-footer-stack",
    workspaceName: "stack-menu",
    projectName: "xum",
    executeBash: (_workspaceId, script) => Promise.resolve({
      success: true as const,
      output: script.includes("gh stack view") ? STACK_VIEW_JSON : "",
      exitCode: 0,
      wall_duration_ms: 5
    }),
    messages: [createUserMessage("msg-1", "Show me the stack", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    }), createAssistantMessage("msg-2", "It has three layers.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 50000
    })]
  })} />,
  // Play-only: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is full, and
  // PRStackBadge stories already capture the open menu.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const footer = await waitFor(() => {
      const element = canvasElement.querySelector<HTMLElement>('[data-testid="workspace-footer-bar"]');
      if (!element) throw new Error("Footer not rendered");
      return element;
    }, {
      timeout: 10_000
    });
    const trigger = await within(footer).findByRole("button", {
      name: "View stack with 3 branches"
    }, {
      timeout: 10_000
    });
    await userEvent.click(trigger);
    const menu = await within(document.body).findByRole("menu", {
      name: "Pull request stack"
    });
    // The footer row's edge fade is a mask that hides, and blocks clicks on, anything the row
    // paints outside its box, so each row must be hit where it is drawn, not just be in the DOM.
    for (const row of within(menu).getAllByRole("menuitem")) {
      const rect = row.getBoundingClientRect();
      const hit = document.elementFromPoint(rect.left + rect.width / 2, rect.top + rect.height / 2);
      await expect(row.contains(hit)).toBe(true);
    }
  }
}`,...s.parameters?.docs?.source}}};const z=["StackMenu"];export{s as StackMenu,z as __namedExportsOrder,Y as default};
