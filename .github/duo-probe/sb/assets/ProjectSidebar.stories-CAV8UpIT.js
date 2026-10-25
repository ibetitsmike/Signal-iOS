import{j as c,e as l,b as j,a as E,u as S,L as v}from"./iframe-DS5VyXLs.js";import{a as x,b as m,A as i}from"./meta-BWzge-eA.js";import{c as p}from"./orpc-DZZSHgoi.js";import{s as P}from"./drafts-BsIhy9OK.js";import{a as I,o as W}from"./storyPlayHelpers-_VqAI56j.js";import{c as r,g as d}from"./workspaces-BLRlQP3Y.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{fireEvent:C,userEvent:A,waitFor:s}=__STORYBOOK_MODULE_TEST__,y="/home/user/projects/my-app",ne={...x,title:"Components/ProjectSidebar"},w={parameters:{pixel:{matrix:m}},render:()=>c.jsx(i,{setup:()=>{const e=[r({id:"ws-1",name:"main",projectName:"my-app"}),r({id:"ws-2",name:"feature/auth",projectName:"my-app"})];return l(["/home/user/projects/my-app"]),p({projects:d(e),workspaces:e})}}),play:async({canvasElement:e})=>{await I(e);const a=await s(()=>{const t=e.querySelector('button[aria-label="Project options for my-app"]');if(!t)throw new Error("Project options button not found");return t});await C.click(a),await s(()=>{if(!Array.from(document.querySelectorAll("button")).some(n=>n.textContent?.trim()==="Delete..."))throw new Error("Project options menu did not open")});const o=await s(()=>{const t=Array.from(document.querySelectorAll("button")).find(n=>n.textContent?.trim()==="Delete...");if(!t)throw new Error("Delete menu item not found");return t});await A.click(o),await s(()=>{const t=document.querySelector('[role="dialog"]');if(!t)throw new Error("Confirmation modal not found");if(!t.textContent?.includes("my-app"))throw new Error("Modal should reference the project name")},{timeout:2e3})}},h={parameters:{pixel:{matrix:m}},render:()=>c.jsx(i,{setup:()=>{const e="my-app",a=[r({id:"ws-parent",name:"feature/orchestrator",projectName:e,title:"Orchestrate feature work"}),r({id:"sub-backend",name:"task/backend",projectName:e,title:"Implement backend",parentWorkspaceId:"ws-parent",taskStatus:"running"}),r({id:"candidate-a",name:"task/candidate-a",projectName:e,title:"Compare designs",parentWorkspaceId:"sub-backend",taskStatus:"running",bestOf:{groupId:"best-of-1",index:0,total:2}}),r({id:"candidate-b",name:"task/candidate-b",projectName:e,title:"Compare designs",parentWorkspaceId:"sub-backend",taskStatus:"queued",bestOf:{groupId:"best-of-1",index:1,total:2}}),r({id:"sub-docs",name:"task/docs",projectName:e,title:"Write docs",parentWorkspaceId:"ws-parent",taskStatus:"running"})];return l([y]),localStorage.setItem("expandedTaskGroups",JSON.stringify({"task:sub-backend:best-of-1":!0})),p({projects:d(a),workspaces:a})}}),play:async({canvasElement:e})=>{await s(()=>{if(!e.querySelector('[data-testid="task-group-best-of-1"]'))throw new Error("Best-of group header not found")})}},k={parameters:{pixel:{matrix:m}},render:()=>c.jsx(i,{setup:()=>{const e="my-app",a=(t,n)=>r({id:`cand-${t}`,name:`task/cand-${t}`,projectName:e,title:"Compare implementation options",parentWorkspaceId:"ws-parent",taskStatus:n,bestOf:{groupId:"bo-1",index:t,total:3}}),o=[r({id:"ws-parent",name:"feature/compare",projectName:e,title:"Pick the best approach"}),a(0,"running"),a(1,"running"),a(2,"queued")];return l([y]),localStorage.setItem("expandedTaskGroups",JSON.stringify({"task:ws-parent:bo-1":!0})),p({projects:d(o),workspaces:o})}}),play:async({canvasElement:e})=>{await s(()=>{if(!e.querySelector('[data-testid="task-group-bo-1"]'))throw new Error("Best-of group header not found");if(!e.querySelector('[aria-label="Select workspace Candidate A"]'))throw new Error("Expected label-only candidate rows")})}},f={parameters:{pixel:{matrix:m}},render:()=>c.jsx(i,{setup:()=>{const e="my-app",a=(t,n,u)=>r({id:t,name:`task/${t}`,projectName:e,parentWorkspaceId:"ws-main",workflowTask:{runId:"wfr_review1234",stepId:n,workflowName:"review-pipeline"},...u}),o=[r({id:"ws-main",name:"feature/payments",projectName:e,title:"Payments integration"}),a("wf-claims","claims",{title:"Extract claims",taskStatus:"reported",createdAt:new Date(Date.now()-48e4).toISOString()}),r({id:"wf-tests",name:"task/wf-tests",projectName:e,title:"Run test matrix",parentWorkspaceId:"ws-main",taskStatus:"running",createdAt:new Date(Date.now()-36e4).toISOString(),workflowTask:{runId:"wfr_legacy567890",stepId:"tests"}}),a("wf-verify","verify",{title:"Verify claims",taskStatus:"running",createdAt:new Date(Date.now()-3e5).toISOString()}),r({id:"candidate-review-a",name:"task/candidate-review-a",projectName:e,title:"Compare reviews",parentWorkspaceId:"ws-main",taskStatus:"queued",bestOf:{groupId:"best-of-2",index:0,total:2}}),r({id:"candidate-review-b",name:"task/candidate-review-b",projectName:e,title:"Compare reviews",parentWorkspaceId:"ws-main",taskStatus:"queued",bestOf:{groupId:"best-of-2",index:1,total:2}})];return l([y]),p({projects:d(o),workspaces:o})}}),play:async({canvasElement:e})=>{await s(()=>{const a=e.querySelector('[data-testid="task-group-wfr_review1234"]'),o=e.querySelector('[data-testid="task-group-wfr_legacy567890"]');if(!a||!o)throw new Error("Expected two workflow run group headers");if(e.querySelector('[aria-label="Select workspace Extract claims"]'))throw new Error("Expected completed workflow members to stay out of the left sidebar");if(!e.querySelector('[aria-label="Select workspace Verify claims"]'))throw new Error("Expected the active workflow member to remain visible")})}},b={globals:{viewport:{value:"mobile2",isRotated:!1}},parameters:{pixel:{matrix:{themes:["dark","light"],viewports:["phone","laptop"]}}},render:()=>c.jsx(i,{setup:()=>{j(),E(),S(v,!1);const e=[r({id:"alpha-pinned",name:"alpha-pinned",title:"Pinned from a long project name",projectName:"alpha-application-with-a-long-name",pinnedAt:"2026-01-02T00:00:00.000Z"}),r({id:"beta-pinned",name:"beta-pinned",title:"Pinned beta chat",projectName:"beta-service",pinnedAt:"2026-01-01T00:00:00.000Z"}),r({id:"alpha-recent",name:"alpha-recent",title:"Recent alpha work",projectName:"alpha-application-with-a-long-name"}),{...r({id:"scratch-flat",name:"scratch-flat",title:"Scratch idea",projectName:"Scratch",projectPath:"/home/user/.xum/scratch/scratch-flat"}),kind:"scratch"}],a=d(e),o="/home/user/projects/alpha-application-with-a-long-name",t="/home/user/projects/beta-service",n=a.get(o),u=a.get(t);return n&&a.set(o,{...n,color:"Blue"}),u&&a.set(t,{...u,color:"Green"}),P(t,[{draftId:"flat-draft",workspaceName:"beta-draft",prompt:"Refactor the cache"}]),p({projects:a,workspaces:e,userPreferences:{ui:{sidebarFlatMode:!0}}})}}),play:async({canvasElement:e})=>{await W(e),await s(()=>{if(!e.querySelector('[data-testid="workspace-project-avatar-alpha-pinned"]'))throw new Error("Expected a project avatar on a flat-list chat row");if(!e.querySelector('button[aria-label="Project options for alpha-application-with-a-long-name"]'))throw new Error("Expected project management headers below the flat list")})}},g={parameters:{pixel:{matrix:m}},render:()=>c.jsx(i,{setup:()=>{const e=[r({id:"ws-alpha",name:"alpha",projectName:"my-app",pinnedAt:"2026-01-01T00:00:01.000Z"}),r({id:"ws-bravo",name:"bravo",projectName:"my-app",pinnedAt:"2026-01-01T00:00:02.000Z"}),r({id:"ws-charlie",name:"charlie",projectName:"my-app",pinnedAt:"2026-01-01T00:00:00.000Z"}),r({id:"ws-recent",name:"recent-work",projectName:"my-app"})];return l([y]),p({projects:d(e),workspaces:e})}}),play:async({canvasElement:e})=>{await s(()=>{const a=Array.from(e.querySelectorAll('[data-workspace-id][role="button"]')).map(t=>t.dataset.workspaceId),o=["ws-charlie","ws-alpha","ws-bravo","ws-recent"];if(a.length!==o.length||o.some((t,n)=>a[n]!==t))throw new Error(`Expected pinned order ${o.join(", ")} but saw ${a.join(", ")}`)})}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-1",
      name: "main",
      projectName: "my-app"
    }), createWorkspace({
      id: "ws-2",
      name: "feature/auth",
      projectName: "my-app"
    })];
    expandProjects(["/home/user/projects/my-app"]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    // The composer focuses itself on load. Focus leaving the open menu closes it, so a menu
    // opened before that would close before the click below lands on it.
    await waitForChatInputAutofocusDone(canvasElement);
    const projectOptionsButton = await waitFor(() => {
      const button = canvasElement.querySelector<HTMLButtonElement>('button[aria-label="Project options for my-app"]');
      if (!button) throw new Error("Project options button not found");
      return button;
    });

    // Action buttons are hidden (pointer-events: none) until row hover.
    // CSS :hover can't be triggered by testing-library's userEvent.hover(),
    // so use fireEvent.click which bypasses the pointer-events check.
    await fireEvent.click(projectOptionsButton);
    await waitFor(() => {
      const menuIsVisible = Array.from(document.querySelectorAll<HTMLButtonElement>("button")).some(button => button.textContent?.trim() === "Delete...");
      if (!menuIsVisible) throw new Error("Project options menu did not open");
    });
    const deleteMenuItem = await waitFor(() => {
      const button = Array.from(document.querySelectorAll<HTMLButtonElement>("button")).find(candidate => candidate.textContent?.trim() === "Delete...");
      if (!button) throw new Error("Delete menu item not found");
      return button;
    });
    await userEvent.click(deleteMenuItem);
    await waitFor(() => {
      const dialog = document.querySelector('[role="dialog"]');
      if (!dialog) throw new Error("Confirmation modal not found");
      if (!dialog.textContent?.includes("my-app")) {
        throw new Error("Modal should reference the project name");
      }
    }, {
      timeout: 2000
    });
  }
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const projectName = "my-app";
    const workspaces = [createWorkspace({
      id: "ws-parent",
      name: "feature/orchestrator",
      projectName,
      title: "Orchestrate feature work"
    }), createWorkspace({
      id: "sub-backend",
      name: "task/backend",
      projectName,
      title: "Implement backend",
      parentWorkspaceId: "ws-parent",
      taskStatus: "running"
    }), createWorkspace({
      id: "candidate-a",
      name: "task/candidate-a",
      projectName,
      title: "Compare designs",
      parentWorkspaceId: "sub-backend",
      taskStatus: "running",
      bestOf: {
        groupId: "best-of-1",
        index: 0,
        total: 2
      }
    }), createWorkspace({
      id: "candidate-b",
      name: "task/candidate-b",
      projectName,
      title: "Compare designs",
      parentWorkspaceId: "sub-backend",
      taskStatus: "queued",
      bestOf: {
        groupId: "best-of-1",
        index: 1,
        total: 2
      }
    }),
    // Lower sibling: the parent trunk must continue through the group header.
    createWorkspace({
      id: "sub-docs",
      name: "task/docs",
      projectName,
      title: "Write docs",
      parentWorkspaceId: "ws-parent",
      taskStatus: "running"
    })];
    expandProjects([PROJECT_PATH]);
    localStorage.setItem("expandedTaskGroups", JSON.stringify({
      "task:sub-backend:best-of-1": true
    }));
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      if (!canvasElement.querySelector('[data-testid="task-group-best-of-1"]')) {
        throw new Error("Best-of group header not found");
      }
    });
  }
}`,...h.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const projectName = "my-app";
    const candidate = (index: number, taskStatus: "running" | "queued") => createWorkspace({
      id: \`cand-\${index}\`,
      name: \`task/cand-\${index}\`,
      projectName,
      title: "Compare implementation options",
      parentWorkspaceId: "ws-parent",
      taskStatus,
      bestOf: {
        groupId: "bo-1",
        index,
        total: 3
      }
    });
    const workspaces = [createWorkspace({
      id: "ws-parent",
      name: "feature/compare",
      projectName,
      title: "Pick the best approach"
    }), candidate(0, "running"), candidate(1, "running"), candidate(2, "queued")];
    expandProjects([PROJECT_PATH]);
    localStorage.setItem("expandedTaskGroups", JSON.stringify({
      "task:ws-parent:bo-1": true
    }));
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      if (!canvasElement.querySelector('[data-testid="task-group-bo-1"]')) {
        throw new Error("Best-of group header not found");
      }
      if (!canvasElement.querySelector('[aria-label="Select workspace Candidate A"]')) {
        throw new Error("Expected label-only candidate rows");
      }
    });
  }
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const projectName = "my-app";
    const reviewRun = (id: string, stepId: string, opts: Partial<Parameters<typeof createWorkspace>[0]>) => createWorkspace({
      id,
      name: \`task/\${id}\`,
      projectName,
      parentWorkspaceId: "ws-main",
      workflowTask: {
        runId: "wfr_review1234",
        stepId,
        workflowName: "review-pipeline"
      },
      ...opts
    } as Parameters<typeof createWorkspace>[0]);
    const workspaces = [createWorkspace({
      id: "ws-main",
      name: "feature/payments",
      projectName,
      title: "Payments integration"
    }), reviewRun("wf-claims", "claims", {
      title: "Extract claims",
      taskStatus: "reported",
      createdAt: new Date(Date.now() - 8 * 60_000).toISOString()
    }), createWorkspace({
      id: "wf-tests",
      name: "task/wf-tests",
      projectName,
      title: "Run test matrix",
      parentWorkspaceId: "ws-main",
      taskStatus: "running",
      createdAt: new Date(Date.now() - 6 * 60_000).toISOString(),
      workflowTask: {
        runId: "wfr_legacy567890",
        stepId: "tests"
      }
    }), reviewRun("wf-verify", "verify", {
      title: "Verify claims",
      taskStatus: "running",
      createdAt: new Date(Date.now() - 5 * 60_000).toISOString()
    }), createWorkspace({
      id: "candidate-review-a",
      name: "task/candidate-review-a",
      projectName,
      title: "Compare reviews",
      parentWorkspaceId: "ws-main",
      taskStatus: "queued",
      bestOf: {
        groupId: "best-of-2",
        index: 0,
        total: 2
      }
    }), createWorkspace({
      id: "candidate-review-b",
      name: "task/candidate-review-b",
      projectName,
      title: "Compare reviews",
      parentWorkspaceId: "ws-main",
      taskStatus: "queued",
      bestOf: {
        groupId: "best-of-2",
        index: 1,
        total: 2
      }
    })];
    expandProjects([PROJECT_PATH]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      const named = canvasElement.querySelector('[data-testid="task-group-wfr_review1234"]');
      const fallback = canvasElement.querySelector('[data-testid="task-group-wfr_legacy567890"]');
      if (!named || !fallback) {
        throw new Error("Expected two workflow run group headers");
      }
      if (canvasElement.querySelector('[aria-label="Select workspace Extract claims"]')) {
        throw new Error("Expected completed workflow members to stay out of the left sidebar");
      }
      if (!canvasElement.querySelector('[aria-label="Select workspace Verify claims"]')) {
        throw new Error("Expected the active workflow member to remain visible");
      }
    });
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // The flat list replaces the whole sidebar layout, so validate the compact
  // avatar/truncation behavior at the phone width alongside the laptop capture.
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        themes: ["dark", "light"],
        viewports: ["phone", "laptop"]
      }
    }
  },
  render: () => <AppWithMocks setup={() => {
    // Keep the sidebar visible: no selected workspace (mobile shows the chat
    // over the sidebar) and the wide sidebar expanded; the play opens the
    // phone drawer.
    clearWorkspaceSelection();
    collapseRightSidebar();
    updatePersistedState(LEFT_SIDEBAR_COLLAPSED_KEY, false);
    const workspaces = [createWorkspace({
      id: "alpha-pinned",
      name: "alpha-pinned",
      title: "Pinned from a long project name",
      projectName: "alpha-application-with-a-long-name",
      pinnedAt: "2026-01-02T00:00:00.000Z"
    }), createWorkspace({
      id: "beta-pinned",
      name: "beta-pinned",
      title: "Pinned beta chat",
      projectName: "beta-service",
      pinnedAt: "2026-01-01T00:00:00.000Z"
    }), createWorkspace({
      id: "alpha-recent",
      name: "alpha-recent",
      title: "Recent alpha work",
      projectName: "alpha-application-with-a-long-name"
    }), {
      ...createWorkspace({
        id: "scratch-flat",
        name: "scratch-flat",
        title: "Scratch idea",
        projectName: "Scratch",
        projectPath: "/home/user/.xum/scratch/scratch-flat"
      }),
      kind: "scratch" as const
    }];
    const projects = groupWorkspacesByProject(workspaces);
    const alphaPath = "/home/user/projects/alpha-application-with-a-long-name";
    const betaPath = "/home/user/projects/beta-service";
    const alphaConfig = projects.get(alphaPath);
    const betaConfig = projects.get(betaPath);
    if (alphaConfig) projects.set(alphaPath, {
      ...alphaConfig,
      color: "Blue"
    });
    if (betaConfig) projects.set(betaPath, {
      ...betaConfig,
      color: "Green"
    });
    // A draft row shows its project's avatar with the draft cues.
    setWorkspaceDrafts(betaPath, [{
      draftId: "flat-draft",
      workspaceName: "beta-draft",
      prompt: "Refactor the cache"
    }]);
    return createMockORPCClient({
      projects,
      workspaces,
      userPreferences: {
        ui: {
          sidebarFlatMode: true
        }
      }
    });
  }} />,
  // Contract: the flat list (avatars) and the project management headers are
  // actually on screen, so a viewport variant cannot silently snapshot the
  // wrong UI (e.g. the sidebar hidden behind a selected chat on mobile).
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await openLeftSidebar(canvasElement);
    await waitFor(() => {
      if (!canvasElement.querySelector('[data-testid="workspace-project-avatar-alpha-pinned"]')) {
        throw new Error("Expected a project avatar on a flat-list chat row");
      }
      if (!canvasElement.querySelector('button[aria-label="Project options for alpha-application-with-a-long-name"]')) {
        throw new Error("Expected project management headers below the flat list");
      }
    });
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => {
    const workspaces = [createWorkspace({
      id: "ws-alpha",
      name: "alpha",
      projectName: "my-app",
      pinnedAt: "2026-01-01T00:00:01.000Z"
    }), createWorkspace({
      id: "ws-bravo",
      name: "bravo",
      projectName: "my-app",
      pinnedAt: "2026-01-01T00:00:02.000Z"
    }), createWorkspace({
      id: "ws-charlie",
      name: "charlie",
      projectName: "my-app",
      pinnedAt: "2026-01-01T00:00:00.000Z"
    }), createWorkspace({
      id: "ws-recent",
      name: "recent-work",
      projectName: "my-app"
    })];
    expandProjects([PROJECT_PATH]);
    return createMockORPCClient({
      projects: groupWorkspacesByProject(workspaces),
      workspaces
    });
  }} />,
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    await waitFor(() => {
      // Scope to workspace rows (role="button"): inline action controls inside
      // AgentListItem carry data-workspace-id too and would duplicate entries.
      const rows = Array.from(canvasElement.querySelectorAll<HTMLElement>('[data-workspace-id][role="button"]')).map(row => row.dataset.workspaceId);
      const expected = ["ws-charlie", "ws-alpha", "ws-bravo", "ws-recent"];
      if (rows.length !== expected.length || expected.some((id, i) => rows[i] !== id)) {
        throw new Error(\`Expected pinned order \${expected.join(", ")} but saw \${rows.join(", ")}\`);
      }
    });
  }
}`,...g.parameters?.docs?.source}}};const se=["ProjectRemovalDisabled","NestedTaskGroupConnectors","BestOfGroup","WorkflowRunGroups","FlatChatList","PinnedChatsCustomOrder"];export{k as BestOfGroup,b as FlatChatList,h as NestedTaskGroupConnectors,g as PinnedChatsCustomOrder,w as ProjectRemovalDisabled,f as WorkflowRunGroups,se as __namedExportsOrder,ne as default};
