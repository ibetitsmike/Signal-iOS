import{j as u,S as i}from"./iframe-DS5VyXLs.js";import{a as n,P as l,A as d}from"./meta-BWzge-eA.js";import{a as h,c as w}from"./messages-CnWrfKdU.js";import{s as k}from"./chatSetup-DJI_9Mbv.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspaces-BLRlQP3Y.js";import"./workspace-D5uypDf7.js";import"./orpc-DZZSHgoi.js";import"./autoModelRouting-Bi5zLFGe.js";import"./git-Ekgdg9se.js";const{expect:f,userEvent:g,waitFor:S,within:o}=__STORYBOOK_MODULE_TEST__,Y={...n,title:"App/WorkspaceFooter"},y=JSON.stringify({trunk:"main",branches:[{name:"mike/stack-base",isCurrent:!1,isMerged:!0,isQueued:!1,needsRebase:!1,pr:{number:30019,state:"MERGED",url:"https://github.com/coder/xum/pull/30019"}},{name:"mike/stack-menu",isCurrent:!0,isMerged:!1,isQueued:!1,needsRebase:!1,pr:{number:30021,state:"OPEN",url:"https://github.com/coder/xum/pull/30021"}},{name:"mike/stack-top",isCurrent:!1,isMerged:!1,isQueued:!1,needsRebase:!1}]}),s={render:()=>u.jsx(d,{setup:()=>k({workspaceId:"ws-footer-stack",workspaceName:"stack-menu",projectName:"xum",executeBash:(a,r)=>Promise.resolve({success:!0,output:r.includes("gh stack view")?y:"",exitCode:0,wall_duration_ms:5}),messages:[h("msg-1","Show me the stack",{historySequence:1,timestamp:i-6e4}),w("msg-2","It has three layers.",{historySequence:2,timestamp:i-5e4})]})}),parameters:{...n.parameters,pixel:l},play:async({canvasElement:a})=>{const r=await S(()=>{const e=a.querySelector('[data-testid="workspace-footer-bar"]');if(!e)throw new Error("Footer not rendered");return e},{timeout:1e4}),m=await o(r).findByRole("button",{name:"View stack with 3 branches"},{timeout:1e4});await g.click(m);const c=await o(document.body).findByRole("menu",{name:"Pull request stack"});for(const e of o(c).getAllByRole("menuitem")){const t=e.getBoundingClientRect(),p=document.elementFromPoint(t.left+t.width/2,t.top+t.height/2);await f(e.contains(p)).toBe(!0)}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
