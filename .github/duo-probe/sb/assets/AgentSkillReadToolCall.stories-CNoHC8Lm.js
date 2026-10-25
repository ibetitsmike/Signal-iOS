import{j as a,S as e}from"./iframe-DpCW2UOM.js";import{a as l,A as r}from"./meta-BwRgvoZ6.js";import{s as c}from"./chatSetup-48_rCYsC.js";import{a as n,c as o}from"./messages-BbMCeQNx.js";import{a as i}from"./tools-Bd0lcXw4.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const U={...l,title:"App/Chat/Tools/AgentSkillRead"},t={render:()=>a.jsx(r,{setup:()=>c({workspaceId:"ws-skills-loaded",messages:[n("msg-1","Help me write tests for this component",{historySequence:1,timestamp:e-12e4}),o("msg-2","I'll load the testing skill to follow project conventions.",{historySequence:2,timestamp:e-115e3,toolCalls:[i("tc-1","tests",{description:"Testing doctrine, commands, and test layout conventions",scope:"project"})]}),o("msg-3","I'll also load the React effects skill since this is a React component.",{historySequence:3,timestamp:e-11e4,toolCalls:[i("tc-2","react-effects",{description:"Guidelines for when to use (and avoid) useEffect in React",scope:"project"})]}),o("msg-4","Now I can write tests that follow your project's testing patterns.",{historySequence:4,timestamp:e-1e5})],agentSkills:[{name:"tests",description:"Testing doctrine, commands, and test layout conventions",scope:"project"},{name:"react-effects",description:"Guidelines for when to use (and avoid) useEffect in React",scope:"project"},{name:"pull-requests",description:"Guidelines for creating and managing Pull Requests",scope:"project"},{name:"my-company-style",description:"Company-wide coding style and conventions",scope:"global"},{name:"init",description:"Bootstrap an AGENTS.md file in a new or existing project",scope:"built-in"}]})})},s={render:()=>a.jsx(r,{setup:()=>c({workspaceId:"ws-skill",messages:[n("msg-1","/react-effects Audit this effect for stale closures",{historySequence:1,timestamp:e-12e4,muxMetadata:{type:"agent-skill",rawCommand:"/react-effects Audit this effect for stale closures",commandPrefix:"/react-effects",skillName:"react-effects",scope:"project"}}),o("msg-2","I'll review the effect with the react-effects skill and report any stale closure risks.",{historySequence:2,timestamp:e-11e4})]})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-skills-loaded",
    messages: [createUserMessage("msg-1", "Help me write tests for this component", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 120000
    }), createAssistantMessage("msg-2", "I'll load the testing skill to follow project conventions.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 115000,
      toolCalls: [createAgentSkillReadTool("tc-1", "tests", {
        description: "Testing doctrine, commands, and test layout conventions",
        scope: "project"
      })]
    }), createAssistantMessage("msg-3", "I'll also load the React effects skill since this is a React component.", {
      historySequence: 3,
      timestamp: STABLE_TIMESTAMP - 110000,
      toolCalls: [createAgentSkillReadTool("tc-2", "react-effects", {
        description: "Guidelines for when to use (and avoid) useEffect in React",
        scope: "project"
      })]
    }), createAssistantMessage("msg-4", "Now I can write tests that follow your project's testing patterns.", {
      historySequence: 4,
      timestamp: STABLE_TIMESTAMP - 100000
    })],
    // Available skills organized by scope: Project (3), Global (1), Built-in (1)
    // Loaded: tests, react-effects
    agentSkills: [
    // Project skills
    {
      name: "tests",
      description: "Testing doctrine, commands, and test layout conventions",
      scope: "project"
    }, {
      name: "react-effects",
      description: "Guidelines for when to use (and avoid) useEffect in React",
      scope: "project"
    }, {
      name: "pull-requests",
      description: "Guidelines for creating and managing Pull Requests",
      scope: "project"
    },
    // Global skill
    {
      name: "my-company-style",
      description: "Company-wide coding style and conventions",
      scope: "global"
    },
    // Built-in skill
    {
      name: "init",
      description: "Bootstrap an AGENTS.md file in a new or existing project",
      scope: "built-in"
    }]
  })} />
}`,...t.parameters?.docs?.source},description:{story:"Chat showing loaded skills via agent_skill_read tool calls",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-skill",
    messages: [createUserMessage("msg-1", "/react-effects Audit this effect for stale closures", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 120000,
      muxMetadata: {
        type: "agent-skill",
        rawCommand: "/react-effects Audit this effect for stale closures",
        commandPrefix: "/react-effects",
        skillName: "react-effects",
        scope: "project"
      }
    }), createAssistantMessage("msg-2", "I'll review the effect with the react-effects skill and report any stale closure risks.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 110000
    })]
  })} />
}`,...s.parameters?.docs?.source},description:{story:"Chat showing a skill invocation command on user messages",...s.parameters?.docs?.description}}};const H=["WithLoadedSkills","WithSkillCommand"];export{t as WithLoadedSkills,s as WithSkillCommand,H as __namedExportsOrder,U as default};
