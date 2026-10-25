import{j as r,cS as m}from"./iframe-DwmVy7SQ.js";import{P as f,l as p,S as w}from"./meta-CT6GdK4g.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-B07ZFgJK.js";import"./pin-B7bBByyx.js";import"./AgentListItem-CDHdwnLa.js";import"./useWorkspaceStreamingStatusPhase-BkhDeBLo.js";import"./shield-BJlRjF-1.js";import"./AIView-Cw4ZT1Fh.js";import"./shell-NsnPoeBt.js";import"./useTranscriptContextMenu-BlHqP5bS.js";import"./ConfirmationModal-C1groiNk.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-ZY8y6PCJ.js";import"./sendDispatchModes-BJ8PBEam.js";import"./timelineReveal-HqQYIr77.js";import"./RightSidebar-BQa1W4kD.js";import"./PlanFileDialog-XDIy4dKd.js";import"./diffParser-DYf5q3Bd.js";import"./TimelinePanel-B7hLQBAD.js";import"./TerminalRouterContext-3wrzl_rm.js";import"./ForceDeleteModal-D-zrU_Xr.js";const C={...p,title:"App/Chat/Tools/WorkspaceLifecycle",component:m,parameters:{...p.parameters,pixel:f},decorators:[e=>r.jsx(w,{children:r.jsx("div",{className:"bg-background p-6",children:r.jsx("div",{className:"w-full max-w-2xl",children:r.jsx(e,{})})})})]},t={args:{args:{action:"archive",targets:[{workspaceId:"24e33167af"},{workspaceId:"4a92f76fbf"},{workspaceId:"0b71c40e21"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"archived",action:"archive",workspaceId:"24e33167af",displayName:"Fix streaming resume"},{status:"archived",action:"archive",workspaceId:"4a92f76fbf",displayName:"Review settings polish"},{status:"archived",action:"archive",workspaceId:"0b71c40e21",displayName:"Investigate sidebar jitter"}]}}},s={args:{args:{action:"remove",targets:[{taskId:"wst_9f0c1d77aa"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"removed",action:"remove",taskId:"wst_9f0c1d77aa",workspaceId:"9f0c1d77aa"}]}}},n={args:{args:{action:"delete_worktree",targets:[{workspaceId:"9f0c1d77aa"},{workspaceId:"771be0c3d2"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"deleted_worktree",action:"delete_worktree",workspaceId:"9f0c1d77aa"},{status:"deleted_worktree",action:"delete_worktree",workspaceId:"771be0c3d2"}]}}},o={args:{args:{action:"archive",targets:[{workspaceId:"9f0c1d77aa"},{workspaceId:"771be0c3d2"},{workspaceId:"deadbeef00"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"archived",action:"archive",workspaceId:"9f0c1d77aa"},{status:"already_archived",action:"archive",workspaceId:"771be0c3d2"},{status:"not_found",action:"archive",workspaceId:"deadbeef00",note:"Owned workspace metadata is already absent."}]}}},c={args:{args:{action:"archive",targets:[{workspaceId:"feature-billing-webhooks-experiment-very-long-id-001"},{workspaceId:"4a92f76fbf"},{workspaceId:"c81d3e02b7"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"requires_confirmation",action:"archive",workspaceId:"feature-billing-webhooks-experiment-very-long-id-001",displayName:"Billing webhooks experiment",paths:["packages/server/src/very/deeply/nested/path/to/an/untracked/file/that/is/quite/long/scratch.local.ts",".env.local"]},{status:"active",action:"archive",workspaceId:"4a92f76fbf",displayName:"Running cleanup follow-up",activeTaskIds:["wst_4a92f76fbf01"]},{status:"error",action:"archive",workspaceId:"c81d3e02b7",displayName:"Notes spike",paths:["docs/drafts/really-long-directory-name-for-overflow-checks/notes.md"],error:"Archiving would permanently delete the untracked files listed in paths, because the snapshot archive behavior cannot preserve them. Ask the user to archive this workspace manually."}]}},decorators:[e=>r.jsx("div",{"data-testid":"wl-card-container",className:"w-[375px]",children:r.jsx(e,{})})],play:async({canvasElement:e})=>{if(!e.textContent?.includes("Confirm files"))throw new Error("WorkspaceLifecycle requires_confirmation row did not render");const a=e.querySelector('[data-testid="wl-card-container"]');if(!(a instanceof HTMLElement))throw new Error("WorkspaceLifecycle story container not found");if(await new Promise(u=>requestAnimationFrame(()=>requestAnimationFrame(()=>u()))),a.scrollWidth>a.clientWidth+1)throw new Error(`WorkspaceLifecycle card overflowed its ${a.clientWidth}px container by ${a.scrollWidth-a.clientWidth}px`)}},i={args:{args:{action:"remove",targets:[{workspaceId:"24e33167af"},{workspaceId:"4a92f76fbf"}]},status:"executing",defaultExpanded:!0}},d={args:{args:{action:"remove",targets:[{workspaceId:"24e33167af"}]},status:"failed",defaultExpanded:!0,result:{success:!1,error:"task_workspace_lifecycle requires an orchestrator workspace context."}}},l={args:{args:{action:"remove",targets:[{taskId:"wst_notmine00"}]},status:"completed",defaultExpanded:!0,result:{results:[{status:"invalid_scope",action:"remove",taskId:"wst_notmine00"}]}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "archive",
      targets: [{
        workspaceId: "24e33167af"
      }, {
        workspaceId: "4a92f76fbf"
      }, {
        workspaceId: "0b71c40e21"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [{
        status: "archived",
        action: "archive",
        workspaceId: "24e33167af",
        displayName: "Fix streaming resume"
      }, {
        status: "archived",
        action: "archive",
        workspaceId: "4a92f76fbf",
        displayName: "Review settings polish"
      }, {
        status: "archived",
        action: "archive",
        workspaceId: "0b71c40e21",
        displayName: "Investigate sidebar jitter"
      }]
    }
  }
}`,...t.parameters?.docs?.source},description:{story:'archive · several owned workspaces all archived (uniform → solid "N archived" pill).',...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "remove",
      targets: [{
        taskId: "wst_9f0c1d77aa"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [{
        status: "removed",
        action: "remove",
        taskId: "wst_9f0c1d77aa",
        workspaceId: "9f0c1d77aa"
      }]
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"remove · single workspace removed permanently (danger tone).",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "delete_worktree",
      targets: [{
        workspaceId: "9f0c1d77aa"
      }, {
        workspaceId: "771be0c3d2"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [{
        status: "deleted_worktree",
        action: "delete_worktree",
        workspaceId: "9f0c1d77aa"
      }, {
        status: "deleted_worktree",
        action: "delete_worktree",
        workspaceId: "771be0c3d2"
      }]
    }
  }
}`,...n.parameters?.docs?.source},description:{story:"delete_worktree · batch reclaim of disk for already-archived workspaces.",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "archive",
      targets: [{
        workspaceId: "9f0c1d77aa"
      }, {
        workspaceId: "771be0c3d2"
      }, {
        workspaceId: "deadbeef00"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [{
        status: "archived",
        action: "archive",
        workspaceId: "9f0c1d77aa"
      }, {
        status: "already_archived",
        action: "archive",
        workspaceId: "771be0c3d2"
      }, {
        status: "not_found",
        action: "archive",
        workspaceId: "deadbeef00",
        note: "Owned workspace metadata is already absent."
      }]
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Mixed · one archived, one already archived (no-op), one not found (mixed → dot-chips).",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "archive",
      targets: [{
        workspaceId: "feature-billing-webhooks-experiment-very-long-id-001"
      }, {
        workspaceId: "4a92f76fbf"
      }, {
        workspaceId: "c81d3e02b7"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [
      // Historical (pre-#3950) row: archives now refuse instead, as in the last row.
      {
        status: "requires_confirmation",
        action: "archive",
        workspaceId: "feature-billing-webhooks-experiment-very-long-id-001",
        displayName: "Billing webhooks experiment",
        paths: ["packages/server/src/very/deeply/nested/path/to/an/untracked/file/that/is/quite/long/scratch.local.ts", ".env.local"]
      }, {
        status: "active",
        action: "archive",
        workspaceId: "4a92f76fbf",
        displayName: "Running cleanup follow-up",
        activeTaskIds: ["wst_4a92f76fbf01"]
      }, {
        status: "error",
        action: "archive",
        workspaceId: "c81d3e02b7",
        displayName: "Notes spike",
        paths: ["docs/drafts/really-long-directory-name-for-overflow-checks/notes.md"],
        error: "Archiving would permanently delete the untracked files listed in paths, because the snapshot archive behavior cannot preserve them. Ask the user to archive this workspace manually."
      }]
    }
  },
  decorators: [Story => <div data-testid="wl-card-container" className="w-[375px]">
        <Story />
      </div>],
  play: async ({
    canvasElement
  }) => {
    if (!canvasElement.textContent?.includes("Confirm files")) {
      throw new Error("WorkspaceLifecycle requires_confirmation row did not render");
    }
    const container = canvasElement.querySelector('[data-testid="wl-card-container"]');
    if (!(container instanceof HTMLElement)) {
      throw new Error("WorkspaceLifecycle story container not found");
    }
    // Let layout settle before measuring.
    await new Promise<void>(resolve => requestAnimationFrame(() => requestAnimationFrame(() => resolve())));
    if (container.scrollWidth > container.clientWidth + 1) {
      throw new Error(\`WorkspaceLifecycle card overflowed its \${container.clientWidth}px container by \` + \`\${container.scrollWidth - container.clientWidth}px\`);
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Blocked · requires_confirmation (untracked files would be lost) + an active turn. Pinned
to a fixed ~375px container (the Storybook test-runner renders at desktop width and
ignores viewport / Pixel matrix variants, so the narrow case must be forced with a wrapper) and
a play that fails if a long workspace id / file path overflows instead of truncating.`,...c.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "remove",
      targets: [{
        workspaceId: "24e33167af"
      }, {
        workspaceId: "4a92f76fbf"
      }]
    },
    status: "executing",
    defaultExpanded: true
  }
}`,...i.parameters?.docs?.source},description:{story:"Mid-flight, before the result arrives — falls back to the requested targets.",...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "remove",
      targets: [{
        workspaceId: "24e33167af"
      }]
    },
    status: "failed",
    defaultExpanded: true,
    result: {
      success: false,
      error: "task_workspace_lifecycle requires an orchestrator workspace context."
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Error · a thrown execute() surfaces as { success: false, error } (e.g. the tool ran
outside an orchestrator context). Exercises the shared ErrorBox.`,...d.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      action: "remove",
      targets: [{
        taskId: "wst_notmine00"
      }]
    },
    status: "completed",
    defaultExpanded: true,
    result: {
      results: [{
        status: "invalid_scope",
        action: "remove",
        taskId: "wst_notmine00"
      }]
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Per-row failure · target is not a workspace this orchestrator owns.",...l.parameters?.docs?.description}}};const T=["ArchiveMultiple","RemoveSingle","DeleteWorktreeBatch","PartialNotFound","BlockedNeedsAction","Executing","ErrorResult","InvalidScope"];export{t as ArchiveMultiple,c as BlockedNeedsAction,n as DeleteWorktreeBatch,d as ErrorResult,i as Executing,l as InvalidScope,o as PartialNotFound,s as RemoveSingle,T as __namedExportsOrder,C as default};
