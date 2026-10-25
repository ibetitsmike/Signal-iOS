import{j as l,N as n,s as D,a as I,e as j}from"./iframe-DS5VyXLs.js";import{a as R,b as T,P as A,A as d}from"./meta-BWzge-eA.js";import{c as a,g as _}from"./workspaces-BLRlQP3Y.js";import{c as C}from"./orpc-DZZSHgoi.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-Bi5zLFGe.js";const{expect:r,userEvent:o,waitFor:v,within:m}=__STORYBOOK_MODULE_TEST__,pe={...R,title:"App/WorkspaceSwitcher"},i=36e5,c=864e5;function S(){return[a({id:"ws-myapp-fix-login",name:"fix/login-button",projectName:"my-app",title:"Fix login button styling issue",createdAt:new Date(n-1*i).toISOString()}),a({id:"ws-myapp-auth",name:"feature/auth",projectName:"my-app",createdAt:new Date(n-4*i).toISOString()}),a({id:"ws-myapp-refactor",name:"refactor/api-layer",projectName:"my-app",title:"Refactor API layer to use new error handling patterns",createdAt:new Date(n-2*c).toISOString()}),a({id:"ws-backend-perf",name:"perf/query-cache",projectName:"backend-api",title:"Add query-level caching for dashboard endpoints",createdAt:new Date(n-30*6e4).toISOString()}),a({id:"ws-backend-main",name:"main",projectName:"backend-api",createdAt:new Date(n-5*c).toISOString()}),a({id:"ws-backend-migration",name:"chore/db-migration",projectName:"backend-api",title:"Migrate users table to new schema",createdAt:new Date(n-12*i).toISOString()}),a({id:"ws-docs-quickstart",name:"docs/quickstart-guide",projectName:"docs-site",title:"Rewrite quickstart guide for v2",createdAt:new Date(n-3*i).toISOString()}),a({id:"ws-docs-main",name:"main",projectName:"docs-site",createdAt:new Date(n-7*c).toISOString()})]}function u(t){const e=_(t);return D(t[0]),I(),j([...e.keys()]),C({projects:e,workspaces:t})}async function y(t,e){const s=m(t);await r(s.findAllByText(e,{},{timeout:5e3})).resolves.not.toHaveLength(0),await o.keyboard("{Control>}{Shift>}p{/Shift}{/Control}")}const w={parameters:{pixel:{matrix:T}},render:()=>l.jsx(d,{setup:()=>u(S())}),play:async({canvasElement:t})=>{await y(t,"Fix login button styling issue")}},g={render:()=>l.jsx(d,{setup:()=>u(S())}),play:async({canvasElement:t})=>{await y(t,"Fix login button styling issue"),await o.keyboard("refac")}},h={render:()=>l.jsx(d,{setup:()=>{const t=[a({id:"ws-many-myapp-1",name:"fix/login-button",projectName:"my-app",title:"Fix login button styling issue",createdAt:new Date(n-1*i).toISOString()}),a({id:"ws-many-myapp-2",name:"feature/dark-mode",projectName:"my-app",title:"Implement dark mode toggle",createdAt:new Date(n-6*i).toISOString()}),a({id:"ws-many-myapp-3",name:"main",projectName:"my-app",createdAt:new Date(n-10*c).toISOString()}),a({id:"ws-many-backend-1",name:"perf/query-cache",projectName:"backend-api",title:"Add query-level caching for dashboard endpoints",createdAt:new Date(n-2*i).toISOString()}),a({id:"ws-many-backend-2",name:"fix/rate-limiter",projectName:"backend-api",title:"Fix rate limiter race condition under load",createdAt:new Date(n-1*c).toISOString()}),a({id:"ws-many-backend-3",name:"chore/db-migration",projectName:"backend-api",createdAt:new Date(n-3*c).toISOString()}),a({id:"ws-many-docs-1",name:"docs/quickstart-guide",projectName:"docs-site",title:"Rewrite quickstart guide for v2",createdAt:new Date(n-3*i).toISOString()}),a({id:"ws-many-docs-2",name:"docs/api-reference",projectName:"docs-site",title:"Auto-generate API reference from OpenAPI spec",createdAt:new Date(n-8*i).toISOString()}),a({id:"ws-many-docs-3",name:"main",projectName:"docs-site",createdAt:new Date(n-14*c).toISOString()}),a({id:"ws-many-infra-1",name:"feature/terraform-modules",projectName:"infra-tools",title:"Extract shared Terraform modules for ECS",createdAt:new Date(n-5*i).toISOString()}),a({id:"ws-many-infra-2",name:"fix/ci-pipeline",projectName:"infra-tools",title:"Fix flaky CI pipeline timeout on ARM runners",createdAt:new Date(n-2*c).toISOString()}),a({id:"ws-many-infra-3",name:"main",projectName:"infra-tools",createdAt:new Date(n-30*c).toISOString()}),a({id:"ws-many-design-1",name:"feature/color-tokens",projectName:"design-system",title:"Migrate color palette to design tokens",createdAt:new Date(n-4*i).toISOString()}),a({id:"ws-many-design-2",name:"fix/button-variants",projectName:"design-system",createdAt:new Date(n-9*i).toISOString()})];return u(t)}}),play:async({canvasElement:t})=>{await y(t,"Fix login button styling issue")}},N="Workspace ws-myapp-fix-login is in use by another Xum process: a terminal in pid 4242; try again when it finishes (holder alive).",f={parameters:{...R.parameters,pixel:A},render:()=>l.jsx(d,{setup:()=>{const t=u(S());return t.workspace.remove=()=>Promise.resolve({success:!1,error:N}),t}}),play:async({canvasElement:t})=>{await y(t,"Fix login button styling issue"),await o.keyboard(">Remove Current Workspace");const e=m(t.ownerDocument.body);await o.click(await e.findByText("Remove Current Workspace…"));const s=await e.findByRole("button",{name:"Remove"});await v(()=>r(getComputedStyle(s).pointerEvents).not.toBe("none")),await o.click(s);const p=await e.findByRole("alert",{},{timeout:5e3});await r(p).toHaveTextContent("Failed to remove workspace"),await r(p).toHaveTextContent(N)}},k={parameters:{...R.parameters,pixel:A},render:()=>l.jsx(d,{setup:()=>{const t=a({id:"ws-myapp-subagent",name:"agent_exec_auth",projectName:"my-app",title:"Refactor auth helpers",parentWorkspaceId:"ws-myapp-fix-login"}),e=u([t,...S()]);return Object.assign(e,{tasks:{...e.tasks,previewRemoval:()=>Promise.resolve({success:!0,data:{summary:"Removing this sub-agent would permanently delete the uncommitted or untracked files listed below and 2 commit(s) not captured by a ready patch artifact.",paths:["src/auth/session.ts","src/auth/tokenStore.test.ts","notes/todo.md"]}})}})}}),play:async({canvasElement:t})=>{await y(t,"Refactor auth helpers"),await o.keyboard(">Remove Current Sub-agent");const e=m(t.ownerDocument.body);await o.click(await e.findByText("Remove Current Sub-agent…"));const s=await e.findByRole("region",{name:"Uncommitted or untracked files"});await r(s).toHaveTextContent("src/auth/session.ts"),await r(e.findByRole("button",{name:/Remove sub-agent/})).resolves.toBeTruthy()}},x="/tmp/xum/agent_exec_auth was left behind; remove it manually.",B="Stop the sub-agent before removing it.",b={parameters:{...R.parameters,pixel:A},render:()=>l.jsx(d,{setup:()=>{const t=a({id:"ws-myapp-subagent",name:"agent_exec_auth",projectName:"my-app",title:"Refactor auth helpers",parentWorkspaceId:"ws-myapp-fix-login"}),e=a({id:"ws-myapp-subagent-cache",name:"agent_exec_cache",projectName:"my-app",title:"Warm the query cache",parentWorkspaceId:"ws-myapp-fix-login"}),s=u([...S(),t,e]);return Object.assign(s,{tasks:{...s.tasks,previewRemoval:()=>Promise.resolve({success:!0,data:{summary:null,paths:[]}}),remove:p=>Promise.resolve(p.taskId===e.id?{success:!1,error:B}:{success:!0,data:{warnings:[{kind:"leftover",description:x}]}})}})}}),play:async({canvasElement:t})=>{const e=m(t.ownerDocument.body),s=async O=>{await y(t,"Fix login button styling issue"),await o.keyboard(">Remove Workspace"),await o.click(await e.findByText("Remove Workspace…")),await o.keyboard(O),await o.click(await e.findByText(`my-app/${O}`));const W=await e.findByRole("button",{name:/Remove sub-agent/});await v(()=>r(getComputedStyle(W).pointerEvents).not.toBe("none")),await o.click(W)};await s("agent_exec_auth");const p=await e.findByRole("alert",{},{timeout:5e3});await r(p).toHaveTextContent("Sub-agent removed, but something was left behind"),await r(p).toHaveTextContent(x),await r(e.queryByText(/Failed to remove workspace/)).toBeNull(),await o.click(t.ownerDocument.body),await r(e.getByRole("alert")).toHaveTextContent(x),await s("agent_exec_cache"),await v(()=>r(e.getByRole("alert")).toHaveTextContent(B)),await r(e.getAllByRole("alert")).toHaveLength(1);const E=e.getByRole("alert");await r(E).toHaveTextContent("Failed to remove workspace"),await o.click(m(E).getByRole("button",{name:"Dismiss"})),await v(()=>r(e.getByRole("alert")).toHaveTextContent(x)),await o.click(m(e.getByRole("alert")).getByRole("button",{name:"Dismiss"})),await v(()=>r(e.queryByRole("alert")).toBeNull())}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      matrix: PIXEL_DUAL_THEME
    }
  },
  render: () => <AppWithMocks setup={() => setupStory(createRichWorkspaces())} />,
  play: async ({
    canvasElement
  }) => {
    await openPalette(canvasElement, "Fix login button styling issue");
  }
}`,...w.parameters?.docs?.source},description:{story:`Command palette showing 8 workspaces across 3 projects.

Demonstrates title-first hierarchy:
- Workspaces with titles show the title as primary label
- Workspaces without titles show the branch name as primary
- Mix of recent and older workspaces shows age diversity`,...w.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupStory(createRichWorkspaces())} />,
  play: async ({
    canvasElement
  }) => {
    await openPalette(canvasElement, "Fix login button styling issue");

    // Type a partial query to trigger fuzzy filtering
    await userEvent.keyboard("refac");
  }
}`,...g.parameters?.docs?.source},description:{story:`Command palette with a fuzzy search query pre-typed.

Types "refac" into the palette input to show:
- Fuzzy matching against titles, branch names, and project names
- Filtered result list with highlighted matches`,...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => {
    const workspaces: FrontendWorkspaceMetadata[] = [
    // ── my-app (3) ───────────────────────────────────────────────────
    createWorkspace({
      id: "ws-many-myapp-1",
      name: "fix/login-button",
      projectName: "my-app",
      title: "Fix login button styling issue",
      createdAt: new Date(NOW - 1 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-myapp-2",
      name: "feature/dark-mode",
      projectName: "my-app",
      title: "Implement dark mode toggle",
      createdAt: new Date(NOW - 6 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-myapp-3",
      name: "main",
      projectName: "my-app",
      createdAt: new Date(NOW - 10 * DAY).toISOString()
    }),
    // ── backend-api (3) ──────────────────────────────────────────────
    createWorkspace({
      id: "ws-many-backend-1",
      name: "perf/query-cache",
      projectName: "backend-api",
      title: "Add query-level caching for dashboard endpoints",
      createdAt: new Date(NOW - 2 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-backend-2",
      name: "fix/rate-limiter",
      projectName: "backend-api",
      title: "Fix rate limiter race condition under load",
      createdAt: new Date(NOW - 1 * DAY).toISOString()
    }), createWorkspace({
      id: "ws-many-backend-3",
      name: "chore/db-migration",
      projectName: "backend-api",
      createdAt: new Date(NOW - 3 * DAY).toISOString()
    }),
    // ── docs-site (3) ────────────────────────────────────────────────
    createWorkspace({
      id: "ws-many-docs-1",
      name: "docs/quickstart-guide",
      projectName: "docs-site",
      title: "Rewrite quickstart guide for v2",
      createdAt: new Date(NOW - 3 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-docs-2",
      name: "docs/api-reference",
      projectName: "docs-site",
      title: "Auto-generate API reference from OpenAPI spec",
      createdAt: new Date(NOW - 8 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-docs-3",
      name: "main",
      projectName: "docs-site",
      createdAt: new Date(NOW - 14 * DAY).toISOString()
    }),
    // ── infra-tools (3) ──────────────────────────────────────────────
    createWorkspace({
      id: "ws-many-infra-1",
      name: "feature/terraform-modules",
      projectName: "infra-tools",
      title: "Extract shared Terraform modules for ECS",
      createdAt: new Date(NOW - 5 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-infra-2",
      name: "fix/ci-pipeline",
      projectName: "infra-tools",
      title: "Fix flaky CI pipeline timeout on ARM runners",
      createdAt: new Date(NOW - 2 * DAY).toISOString()
    }), createWorkspace({
      id: "ws-many-infra-3",
      name: "main",
      projectName: "infra-tools",
      createdAt: new Date(NOW - 30 * DAY).toISOString()
    }),
    // ── design-system (2) ────────────────────────────────────────────
    createWorkspace({
      id: "ws-many-design-1",
      name: "feature/color-tokens",
      projectName: "design-system",
      title: "Migrate color palette to design tokens",
      createdAt: new Date(NOW - 4 * HOUR).toISOString()
    }), createWorkspace({
      id: "ws-many-design-2",
      name: "fix/button-variants",
      projectName: "design-system",
      createdAt: new Date(NOW - 9 * HOUR).toISOString()
    })];
    return setupStory(workspaces);
  }} />,
  play: async ({
    canvasElement
  }) => {
    await openPalette(canvasElement, "Fix login button styling issue");
  }
}`,...h.parameters?.docs?.source},description:{story:`Command palette with 14 workspaces across 5 projects.

Stress-tests:
- Scroll behavior when many items overflow the palette
- Project grouping with many sections
- Visual density at scale`,...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  // Behavior contract only: the popover auto-dismisses, and the snapshot budget is full.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    const client = setupStory(createRichWorkspaces());
    client.workspace.remove = () => Promise.resolve({
      success: false,
      error: REMOVE_REFUSAL
    });
    return client;
  }} />,
  play: async ({
    canvasElement
  }) => {
    await openPalette(canvasElement, "Fix login button styling issue");
    await userEvent.keyboard(">Remove Current Workspace");
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await body.findByText("Remove Current Workspace…"));
    const confirm = await body.findByRole("button", {
      name: "Remove"
    });
    // The confirm dialog mounts while the closing palette dialog still holds
    // \`pointer-events: none\` on the page; clicking before it lifts fails under load.
    await waitFor(() => expect(getComputedStyle(confirm).pointerEvents).not.toBe("none"));
    await userEvent.click(confirm);
    const alert = await body.findByRole("alert", {}, {
      timeout: 5000
    });
    await expect(alert).toHaveTextContent("Failed to remove workspace");
    await expect(alert).toHaveTextContent(REMOVE_REFUSAL);
  }
}`,...f.parameters?.docs?.source},description:{story:`"Remove Current Workspace…" when the backend refuses (e.g. the cross-backend
structural-mutation gate): the refusal must reach the user instead of only the log.`,...f.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  // Behavior contract only: the snapshot budget is full.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    const subagent = createWorkspace({
      id: "ws-myapp-subagent",
      name: "agent_exec_auth",
      projectName: "my-app",
      title: "Refactor auth helpers",
      parentWorkspaceId: "ws-myapp-fix-login"
    });
    const client = setupStory([subagent, ...createRichWorkspaces()]);
    return Object.assign(client, {
      tasks: {
        ...client.tasks,
        previewRemoval: () => Promise.resolve({
          success: true as const,
          data: {
            summary: "Removing this sub-agent would permanently delete the uncommitted or untracked files listed below and 2 commit(s) not captured by a ready patch artifact.",
            paths: ["src/auth/session.ts", "src/auth/tokenStore.test.ts", "notes/todo.md"]
          }
        })
      }
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    await openPalette(canvasElement, "Refactor auth helpers");
    await userEvent.keyboard(">Remove Current Sub-agent");
    const body = within(canvasElement.ownerDocument.body);
    await userEvent.click(await body.findByText("Remove Current Sub-agent…"));
    const files = await body.findByRole("region", {
      name: "Uncommitted or untracked files"
    });
    await expect(files).toHaveTextContent("src/auth/session.ts");
    await expect(body.findByRole("button", {
      name: /Remove sub-agent/
    })).resolves.toBeTruthy();
  }
}`,...k.parameters?.docs?.source},description:{story:`#5106: "Remove Current Sub-agent…" on a sub-agent that holds unpreserved work (the kind a
model's task_remove refuses). The confirmation lists what removal would permanently delete.`,...k.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  // Behavior contract only: the snapshot budget is full.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    const subagent = createWorkspace({
      id: "ws-myapp-subagent",
      name: "agent_exec_auth",
      projectName: "my-app",
      title: "Refactor auth helpers",
      parentWorkspaceId: "ws-myapp-fix-login"
    });
    const refusingSubagent = createWorkspace({
      id: "ws-myapp-subagent-cache",
      name: "agent_exec_cache",
      projectName: "my-app",
      title: "Warm the query cache",
      parentWorkspaceId: "ws-myapp-fix-login"
    });
    const client = setupStory([...createRichWorkspaces(), subagent, refusingSubagent]);
    return Object.assign(client, {
      tasks: {
        ...client.tasks,
        previewRemoval: () => Promise.resolve({
          success: true as const,
          data: {
            summary: null,
            paths: []
          }
        }),
        remove: (input: {
          taskId: string;
        }) => Promise.resolve(input.taskId === refusingSubagent.id ? {
          success: false as const,
          error: SUBAGENT_REFUSAL
        } : {
          success: true as const,
          data: {
            warnings: [{
              kind: "leftover" as const,
              description: SUBAGENT_LEFTOVER
            }]
          }
        })
      }
    });
  }} />,
  play: async ({
    canvasElement
  }) => {
    const body = within(canvasElement.ownerDocument.body);
    const removeViaPrompt = async (name: string) => {
      await openPalette(canvasElement, "Fix login button styling issue");
      await userEvent.keyboard(">Remove Workspace");
      await userEvent.click(await body.findByText("Remove Workspace…"));
      await userEvent.keyboard(name);
      await userEvent.click(await body.findByText(\`my-app/\${name}\`));
      const confirm = await body.findByRole("button", {
        name: /Remove sub-agent/
      });
      await waitFor(() => expect(getComputedStyle(confirm).pointerEvents).not.toBe("none"));
      await userEvent.click(confirm);
    };
    await removeViaPrompt("agent_exec_auth");
    const warning = await body.findByRole("alert", {}, {
      timeout: 5000
    });
    await expect(warning).toHaveTextContent("Sub-agent removed, but something was left behind");
    await expect(warning).toHaveTextContent(SUBAGENT_LEFTOVER);
    await expect(body.queryByText(/Failed to remove workspace/)).toBeNull();
    // An error popover would close on this click.
    await userEvent.click(canvasElement.ownerDocument.body);
    await expect(body.getByRole("alert")).toHaveTextContent(SUBAGENT_LEFTOVER);
    await removeViaPrompt("agent_exec_cache");
    await waitFor(() => expect(body.getByRole("alert")).toHaveTextContent(SUBAGENT_REFUSAL));
    await expect(body.getAllByRole("alert")).toHaveLength(1);
    const failure = body.getByRole("alert");
    await expect(failure).toHaveTextContent("Failed to remove workspace");
    await userEvent.click(within(failure).getByRole("button", {
      name: "Dismiss"
    }));
    await waitFor(() => expect(body.getByRole("alert")).toHaveTextContent(SUBAGENT_LEFTOVER));
    await userEvent.click(within(body.getByRole("alert")).getByRole("button", {
      name: "Dismiss"
    }));
    await waitFor(() => expect(body.queryByRole("alert")).toBeNull());
  }
}`,...b.parameters?.docs?.source},description:{story:`#5190: a forced sub-agent removal (here picked in "Remove Workspace…" while its parent is open)
that left something behind is a warning, not a failure, and it stays until dismissed because
the removed sub-agent's row is gone. A later failure shows alone at the same spot, and the
warning comes back when it closes.`,...b.parameters?.docs?.description}}};const me=["WithTitles","FuzzySearch","ManyWorkspaces","RemoveCurrentWorkspaceRefused","RemoveCurrentSubagentConfirmation","RemoveSubagentLeftoverWarning"];export{g as FuzzySearch,h as ManyWorkspaces,k as RemoveCurrentSubagentConfirmation,f as RemoveCurrentWorkspaceRefused,b as RemoveSubagentLeftoverWarning,w as WithTitles,me as __namedExportsOrder,pe as default};
