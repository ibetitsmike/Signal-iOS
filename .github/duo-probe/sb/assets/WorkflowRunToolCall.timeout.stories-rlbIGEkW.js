import{cQ as o}from"./iframe-DpCW2UOM.js";import{P as r,l as i}from"./meta-BwRgvoZ6.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";const A={...i,title:"App/Chat/Tools/WorkflowRun/Timeouts",component:o,parameters:{pixel:r}},e={id:"wfr_story_timeout_recovered",workspaceId:"workspace-1",workflow:{name:"timeout-demo",description:"Timeout demo",scope:"project",sourcePath:"./workflows/timeout-demo.js",requestedScriptPath:"./workflows/timeout-demo.js",canonicalScriptPath:"./workflows/timeout-demo.js",sourceKind:"workspace-file",sourceHash:"sha256:timeout-story",executable:!0},source:"export default function workflow() { return null; }",sourceHash:"sha256:timeout-story",args:{topic:"workflow timeout finalization"},status:"completed",createdAt:"2026-05-29T00:00:00.000Z",updatedAt:"2026-05-29T00:00:05.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"slow-investigation",taskId:"task_timeout",status:"started",title:"Slow investigation"},{sequence:3,type:"timeout",at:"2026-05-29T00:00:03.000Z",stepId:"slow-investigation",taskId:"task_timeout",phase:"soft",details:{softMs:2e3,graceMs:2e3}},{sequence:4,type:"task",at:"2026-05-29T00:00:03.000Z",stepId:"slow-investigation",taskId:"task_timeout",status:"finalizing",title:"Slow investigation"},{sequence:5,type:"timeout",at:"2026-05-29T00:00:03.100Z",stepId:"slow-investigation",taskId:"task_timeout",phase:"finalization_prompt_sent"},{sequence:6,type:"timeout",at:"2026-05-29T00:00:04.000Z",stepId:"slow-investigation",taskId:"task_timeout",phase:"recovered",details:{graceMs:2e3}},{sequence:7,type:"task",at:"2026-05-29T00:00:04.000Z",stepId:"slow-investigation",taskId:"task_timeout",status:"completed",title:"Slow investigation"},{sequence:8,type:"status",at:"2026-05-29T00:00:05.000Z",status:"completed"}],steps:[]},t={args:{args:{script_path:"./workflows/timeout-demo.js",args:{topic:"workflow timeout finalization"},run_in_background:!1},status:"completed",result:{status:"completed",runId:"wfr_story_timeout_recovered",result:{reportMarkdown:"Recovered during timeout finalization."},run:e}}},s={args:{...t.args,result:{status:"running",runId:"wfr_story_timeout_finalizing",result:null,run:{...e,id:"wfr_story_timeout_finalizing",status:"running",updatedAt:"2026-05-29T00:00:03.100Z",events:e.events.slice(0,5)}}}},n={args:{...t.args,result:{status:"failed",runId:"wfr_story_timeout_hard",result:null,run:{...e,id:"wfr_story_timeout_hard",status:"failed",updatedAt:"2026-05-29T00:00:06.000Z",events:[...e.events.slice(0,5),{sequence:6,type:"timeout",at:"2026-05-29T00:00:05.000Z",stepId:"slow-investigation",taskId:"task_timeout",phase:"hard",details:{error:"Workflow agent step slow-investigation exceeded its soft timeout (2000ms) and did not produce a valid agent_report within the grace period (2000ms)."}},{sequence:7,type:"task",at:"2026-05-29T00:00:05.000Z",stepId:"slow-investigation",taskId:"task_timeout",status:"timed_out",title:"Slow investigation"},{sequence:8,type:"error",at:"2026-05-29T00:00:05.100Z",message:"Workflow agent step slow-investigation exceeded its soft timeout (2000ms) and did not produce a valid agent_report within the grace period (2000ms)."},{sequence:9,type:"status",at:"2026-05-29T00:00:06.000Z",status:"failed"}]}}}},a={args:{...t.args,result:{status:"completed",runId:"wfr_story_timeout_parallel",result:{reportMarkdown:"Parallel workflow completed after one lane recovered during grace."},run:{...e,id:"wfr_story_timeout_parallel",status:"completed",updatedAt:"2026-05-29T00:00:06.000Z",events:[{sequence:1,type:"status",at:"2026-05-29T00:00:00.000Z",status:"running"},{sequence:2,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"fast-lane",taskId:"task_fast",status:"completed",title:"Fast lane"},{sequence:3,type:"task",at:"2026-05-29T00:00:01.000Z",stepId:"slow-lane",taskId:"task_slow",status:"started",title:"Slow lane"},{sequence:4,type:"timeout",at:"2026-05-29T00:00:03.000Z",stepId:"slow-lane",taskId:"task_slow",phase:"soft",details:{softMs:2e3,graceMs:2e3}},{sequence:5,type:"task",at:"2026-05-29T00:00:03.000Z",stepId:"slow-lane",taskId:"task_slow",status:"finalizing",title:"Slow lane"},{sequence:6,type:"timeout",at:"2026-05-29T00:00:03.100Z",stepId:"slow-lane",taskId:"task_slow",phase:"finalization_prompt_sent"},{sequence:7,type:"timeout",at:"2026-05-29T00:00:04.000Z",stepId:"slow-lane",taskId:"task_slow",phase:"recovered",details:{graceMs:2e3}},{sequence:8,type:"task",at:"2026-05-29T00:00:04.000Z",stepId:"slow-lane",taskId:"task_slow",status:"completed",title:"Slow lane"},{sequence:9,type:"status",at:"2026-05-29T00:00:06.000Z",status:"completed"}]}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    args: {
      script_path: "./workflows/timeout-demo.js",
      args: {
        topic: "workflow timeout finalization"
      },
      run_in_background: false
    },
    status: "completed",
    result: {
      status: "completed",
      runId: "wfr_story_timeout_recovered",
      result: {
        reportMarkdown: "Recovered during timeout finalization."
      },
      run: timeoutRecoveredRun
    }
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...TimeoutRecovered.args,
    result: {
      status: "running",
      runId: "wfr_story_timeout_finalizing",
      result: null,
      run: {
        ...timeoutRecoveredRun,
        id: "wfr_story_timeout_finalizing",
        status: "running",
        updatedAt: "2026-05-29T00:00:03.100Z",
        events: timeoutRecoveredRun.events.slice(0, 5)
      }
    }
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    ...TimeoutRecovered.args,
    result: {
      status: "failed",
      runId: "wfr_story_timeout_hard",
      result: null,
      run: {
        ...timeoutRecoveredRun,
        id: "wfr_story_timeout_hard",
        status: "failed",
        updatedAt: "2026-05-29T00:00:06.000Z",
        events: [...timeoutRecoveredRun.events.slice(0, 5), {
          sequence: 6,
          type: "timeout",
          at: "2026-05-29T00:00:05.000Z",
          stepId: "slow-investigation",
          taskId: "task_timeout",
          phase: "hard",
          details: {
            error: "Workflow agent step slow-investigation exceeded its soft timeout (2000ms) and did not produce a valid agent_report within the grace period (2000ms)."
          }
        }, {
          sequence: 7,
          type: "task",
          at: "2026-05-29T00:00:05.000Z",
          stepId: "slow-investigation",
          taskId: "task_timeout",
          status: "timed_out",
          title: "Slow investigation"
        }, {
          sequence: 8,
          type: "error",
          at: "2026-05-29T00:00:05.100Z",
          message: "Workflow agent step slow-investigation exceeded its soft timeout (2000ms) and did not produce a valid agent_report within the grace period (2000ms)."
        }, {
          sequence: 9,
          type: "status",
          at: "2026-05-29T00:00:06.000Z",
          status: "failed"
        }]
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...TimeoutRecovered.args,
    result: {
      status: "completed",
      runId: "wfr_story_timeout_parallel",
      result: {
        reportMarkdown: "Parallel workflow completed after one lane recovered during grace."
      },
      run: {
        ...timeoutRecoveredRun,
        id: "wfr_story_timeout_parallel",
        status: "completed",
        updatedAt: "2026-05-29T00:00:06.000Z",
        events: [{
          sequence: 1,
          type: "status",
          at: "2026-05-29T00:00:00.000Z",
          status: "running"
        }, {
          sequence: 2,
          type: "task",
          at: "2026-05-29T00:00:01.000Z",
          stepId: "fast-lane",
          taskId: "task_fast",
          status: "completed",
          title: "Fast lane"
        }, {
          sequence: 3,
          type: "task",
          at: "2026-05-29T00:00:01.000Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          status: "started",
          title: "Slow lane"
        }, {
          sequence: 4,
          type: "timeout",
          at: "2026-05-29T00:00:03.000Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          phase: "soft",
          details: {
            softMs: 2000,
            graceMs: 2000
          }
        }, {
          sequence: 5,
          type: "task",
          at: "2026-05-29T00:00:03.000Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          status: "finalizing",
          title: "Slow lane"
        }, {
          sequence: 6,
          type: "timeout",
          at: "2026-05-29T00:00:03.100Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          phase: "finalization_prompt_sent"
        }, {
          sequence: 7,
          type: "timeout",
          at: "2026-05-29T00:00:04.000Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          phase: "recovered",
          details: {
            graceMs: 2000
          }
        }, {
          sequence: 8,
          type: "task",
          at: "2026-05-29T00:00:04.000Z",
          stepId: "slow-lane",
          taskId: "task_slow",
          status: "completed",
          title: "Slow lane"
        }, {
          sequence: 9,
          type: "status",
          at: "2026-05-29T00:00:06.000Z",
          status: "completed"
        }]
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const x=["TimeoutRecovered","TimeoutFinalizing","TimeoutHard","TimeoutParallel"];export{s as TimeoutFinalizing,n as TimeoutHard,a as TimeoutParallel,t as TimeoutRecovered,x as __namedExportsOrder,A as default};
