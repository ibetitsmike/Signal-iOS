import{j as p,B as U,d as R,S as i}from"./iframe-C48Cgo5e.js";import{a as k,P as _,A as y}from"./meta-BMDQogfB.js";import{s as b}from"./chatSetup--9T4hSMU.js";import{a as L}from"./touchPointer-CV8GcnjV.js";import{a as g,c as f}from"./messages-Bf7rPDB1.js";import{m as C,l as M}from"./tools-Bd0lcXw4.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-DP57YpuE.js";import"./pin-6tzJ990Y.js";import"./AgentListItem-CFvMKLl9.js";import"./useWorkspaceStreamingStatusPhase-HuSFDBwA.js";import"./shield-DRy0yqJA.js";import"./AIView-DjCOVpt_.js";import"./shell-ThN3C2Ao.js";import"./useTranscriptContextMenu-e5SKaDtk.js";import"./ConfirmationModal-U5ga5P62.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-DFNW6RD-.js";import"./sendDispatchModes-lGqqrDnb.js";import"./timelineReveal-CIzBeIqc.js";import"./RightSidebar-CLY_UzmA.js";import"./PlanFileDialog-CkLjSiH0.js";import"./diffParser-5Qa2D6cp.js";import"./TimelinePanel-B2d7l6J_.js";import"./TerminalRouterContext-C1Lmk9qs.js";import"./ForceDeleteModal-BUKi4yPi.js";import"./workspaces-DZcvJb83.js";import"./workspace-D5uypDf7.js";import"./orpc-qlMSh58E.js";import"./autoModelRouting-B76RJT77.js";import"./git-Ekgdg9se.js";const{within:P,userEvent:r,waitFor:W}=__STORYBOOK_MODULE_TEST__,ye={...k,title:"App/Chat/Tools/AskUserQuestion"};async function I(o){return W(()=>{const t=o.querySelector('[data-component="AskUserQuestionDock"]');if(!t)throw new Error("Open question is not docked above the chat input");return t},{timeout:8e3})}const c={render:()=>p.jsx(y,{setup:()=>b({messages:[g("msg-1","Please implement the feature",{historySequence:1,timestamp:i-3e3}),f("msg-2","I have a few clarifying questions.",{historySequence:2,timestamp:i-2e3,toolCalls:[C("call-ask-1","ask_user_question",{questions:[{question:"Which approach should we take?",header:"Approach",options:[{label:"A",description:"Approach A"},{label:"B",description:"Approach B"}],multiSelect:!1},{question:"Which platforms do we need to support?",header:"Platforms",options:[{label:"macOS",description:"Apple macOS"},{label:"Windows",description:"Microsoft Windows"},{label:"Linux",description:"Linux desktops"}],multiSelect:!0}]})]})],gitStatus:{dirty:1}})}),play:async({canvasElement:o})=>{const t=document.getElementById("storybook-root")??o,e=P(await I(t)),s=await e.findByText(/ask_user_question/,{},{timeout:8e3});e.queryByText("Summary")||await r.click(s);const A=async a=>{const n=(await e.findAllByRole("button")).find(l=>l.tagName==="BUTTON"&&(l.textContent??"").startsWith(a));if(!n)throw new Error(`${a} section button not found`);return n};await r.click(await A("Approach"));try{await e.findByText("Which approach should we take?",{},{timeout:8e3})}catch{const a=s.closest("div")?.parentElement?.textContent?.slice(0,500)??"<missing>";throw new Error(`AskUserQuestionPending: question UI not found. Tool container: ${a}`)}if(await r.click(await e.findByText("Approach A")),await e.findByText("Which platforms do we need to support?"),await r.click(await A("Approach")),await e.findByText("Which approach should we take?"),await new Promise(a=>setTimeout(a,250)),e.queryByText("Which platforms do we need to support?"))throw new Error("Unexpected auto-advance when navigating back to a previous question");await r.click(e.getByText("Approach B")),await e.findByText("Which platforms do we need to support?")}},u={render:()=>p.jsx(y,{setup:()=>b({messages:[g("msg-1","Please implement the feature",{historySequence:1,timestamp:i-6e4}),f("msg-2","I asked some questions.",{historySequence:2,timestamp:i-55e3,toolCalls:[M("call-ask-1","ask_user_question",{questions:[{question:"Which approach should we take?",header:"Approach",options:[{label:"A",description:"Approach A"},{label:"B",description:"Approach B"}],multiSelect:!1}]},{questions:[{question:"Which approach should we take?",header:"Approach",options:[{label:"A",description:"Approach A"},{label:"B",description:"Approach B"}],multiSelect:!1}],answers:{"Which approach should we take?":"A"}})]})]})})},h={parameters:{...k.parameters,pixel:_},render:()=>p.jsx(y,{setup:()=>{const o=[{question:"Which approach should we take?",header:"Approach",options:[{label:"A",description:"Approach A"},{label:"B",description:"Approach B"}],multiSelect:!1}];return b({messages:[g("msg-1","Please implement the feature",{historySequence:1,timestamp:i-6e4}),f("msg-2","Assuming approach A while you decide.",{historySequence:2,timestamp:i-55e3,toolCalls:[M("call-ask-async","ask_user_question",{questions:o},{summary:"Questions shown to the user.",ui_only:{ask_user_question:{questions:o,answers:{},answerDelivery:"message"}}})]})]})}})},d={render:()=>p.jsx(y,{setup:()=>b({messages:[g("msg-1","How should I set this up?",{historySequence:1,timestamp:i-3e3}),f("msg-2","Let me ask a few questions.",{historySequence:2,timestamp:i-2e3,toolCalls:[C("call-ask-1","ask_user_question",{questions:[{question:"Describe your use case in detail",header:"Use Case",options:[{label:"Web app",description:"A web application"},{label:"CLI tool",description:"A command-line tool"}],multiSelect:!1}],answers:{"Describe your use case in detail":`I'm building a complex application.
It needs web, CLI, and API support.
The architecture should be modular.`}})]})],gitStatus:{dirty:0}})})};function O(o){const t=R.c(3);let e;t[0]===Symbol.for("react.memo_cache_sentinel")?(e={width:390,height:844,overflow:"hidden"},t[0]=e):e=t[0];let s;return t[1]!==o?(s=p.jsx("div",{style:e,children:p.jsx(o,{})}),t[1]=o,t[2]=s):s=t[2],s}const m={render:c.render,decorators:[O],parameters:{...k.parameters,pixel:_},play:async({canvasElement:o})=>{const t=document.getElementById("storybook-root")??o,e=P(await I(t)),s=await e.findByText(/ask_user_question/,{},{timeout:8e3});e.queryByText("Summary")||await r.click(s);const a=(await e.findAllByRole("button")).find(n=>n.tagName==="BUTTON"&&(n.textContent??"").startsWith("Approach"));if(!a)throw new Error("Approach section button not found");await r.click(a),await e.findByText("Which approach should we take?",{},{timeout:8e3});const x=L(o.ownerDocument);try{await W(()=>{const n=t.querySelector('[role="button"] > button[role="checkbox"]'),l=n?.querySelector(':scope > [aria-hidden="true"]'),T=n?.parentElement,S=n?.nextElementSibling?.firstElementChild;if(!n||!l||!T||!S)throw new Error("Option row, checkbox box or option label not found");const w=l.getBoundingClientRect(),q=S.getBoundingClientRect(),B=T.getBoundingClientRect().height;if(B<U)throw new Error(`Option row is ${B}px tall, under the touch minimum`);const E=Math.max(w.width,w.height);if(E>20)throw new Error(`Checkbox draws a ${E}px box in an option row`);const v=Math.abs(w.top+w.height/2-(q.top+q.height/2));if(v>2)throw new Error(`Checkbox sits ${v}px off its option label's line`)})}finally{x()}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    messages: [createUserMessage("msg-1", "Please implement the feature", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 3000
    }), createAssistantMessage("msg-2", "I have a few clarifying questions.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 2000,
      toolCalls: [createPendingTool("call-ask-1", "ask_user_question", {
        questions: [{
          question: "Which approach should we take?",
          header: "Approach",
          options: [{
            label: "A",
            description: "Approach A"
          }, {
            label: "B",
            description: "Approach B"
          }],
          multiSelect: false
        }, {
          question: "Which platforms do we need to support?",
          header: "Platforms",
          options: [{
            label: "macOS",
            description: "Apple macOS"
          }, {
            label: "Windows",
            description: "Microsoft Windows"
          }, {
            label: "Linux",
            description: "Linux desktops"
          }],
          multiSelect: true
        }]
      })]
    })],
    gitStatus: {
      dirty: 1
    }
  })} />,
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    // The open question's form lives in the dock above the chat input; its transcript row is a stub.
    const canvas = within(await findQuestionDock(storyRoot));

    // Wait for the tool card to appear (header is rendered even when collapsed).
    const toolTitle = await canvas.findByText(/ask_user_question/, {}, {
      timeout: 8000
    });

    // Ensure tool is expanded (question text is inside ToolDetails).
    if (!canvas.queryByText("Summary")) {
      await userEvent.click(toolTitle);
    }

    // Use findAllByRole (retry-capable) instead of getAllByRole to handle
    // transient DOM gaps when the Storybook iframe remounts between awaits.
    const getSectionButton = async (prefix: string): Promise<HTMLElement> => {
      const buttons = await canvas.findAllByRole("button");
      const btn = buttons.find(el => el.tagName === "BUTTON" && (el.textContent ?? "").startsWith(prefix));
      if (!btn) throw new Error(\`\${prefix} section button not found\`);
      return btn;
    };

    // Ensure we're on the first question.
    await userEvent.click(await getSectionButton("Approach"));

    // Wait for the first question to render.
    try {
      await canvas.findByText("Which approach should we take?", {}, {
        timeout: 8000
      });
    } catch {
      const toolContainerText = toolTitle.closest("div")?.parentElement?.textContent?.slice(0, 500) ?? "<missing>";
      throw new Error(\`AskUserQuestionPending: question UI not found. Tool container: \${toolContainerText}\`);
    }

    // Selecting a single-select option should auto-advance.
    await userEvent.click(await canvas.findByText("Approach A"));
    await canvas.findByText("Which platforms do we need to support?");

    // Regression: you must be able to jump back to a previous section after answering it.
    await userEvent.click(await getSectionButton("Approach"));
    await canvas.findByText("Which approach should we take?");

    // Give React a tick to run any pending effects; we should still be on question 1.
    await new Promise(resolve => setTimeout(resolve, 250));
    if (canvas.queryByText("Which platforms do we need to support?")) {
      throw new Error("Unexpected auto-advance when navigating back to a previous question");
    }

    // Changing the answer should still auto-advance.
    await userEvent.click(canvas.getByText("Approach B"));
    await canvas.findByText("Which platforms do we need to support?");
  }
}`,...c.parameters?.docs?.source},description:{story:"Streaming/working state with ask_user_question pending",...c.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    messages: [createUserMessage("msg-1", "Please implement the feature", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    }), createAssistantMessage("msg-2", "I asked some questions.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 55000,
      toolCalls: [createGenericTool("call-ask-1", "ask_user_question", {
        questions: [{
          question: "Which approach should we take?",
          header: "Approach",
          options: [{
            label: "A",
            description: "Approach A"
          }, {
            label: "B",
            description: "Approach B"
          }],
          multiSelect: false
        }]
      }, {
        questions: [{
          question: "Which approach should we take?",
          header: "Approach",
          options: [{
            label: "A",
            description: "Approach A"
          }, {
            label: "B",
            description: "Approach B"
          }],
          multiSelect: false
        }],
        answers: {
          "Which approach should we take?": "A"
        }
      })]
    })]
  })} />
}`,...u.parameters?.docs?.source},description:{story:"Completed ask_user_question tool call",...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  // Same open form as AskUserQuestionPending apart from two hint lines, so a Pixel snapshot would
  // spend repo budget on repeated layout; the card's behavior is covered by unit tests.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  render: () => <AppWithMocks setup={() => {
    const questions = [{
      question: "Which approach should we take?",
      header: "Approach",
      options: [{
        label: "A",
        description: "Approach A"
      }, {
        label: "B",
        description: "Approach B"
      }],
      multiSelect: false
    }];
    return setupSimpleChatStory({
      messages: [createUserMessage("msg-1", "Please implement the feature", {
        historySequence: 1,
        timestamp: STABLE_TIMESTAMP - 60000
      }), createAssistantMessage("msg-2", "Assuming approach A while you decide.", {
        historySequence: 2,
        timestamp: STABLE_TIMESTAMP - 55000,
        toolCalls: [createGenericTool("call-ask-async", "ask_user_question", {
          questions
        }, {
          summary: "Questions shown to the user.",
          ui_only: {
            ask_user_question: {
              questions,
              answers: {},
              answerDelivery: "message"
            }
          }
        })]
      })]
    });
  }} />
}`,...h.parameters?.docs?.source},description:{story:`Non-blocking (Exec) question: the tool already returned and the agent kept working, but the
questions stay answerable; answers are delivered later as a steering message.`,...h.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    messages: [createUserMessage("msg-1", "How should I set this up?", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 3000
    }), createAssistantMessage("msg-2", "Let me ask a few questions.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 2000,
      toolCalls: [createPendingTool("call-ask-1", "ask_user_question", {
        questions: [{
          question: "Describe your use case in detail",
          header: "Use Case",
          options: [{
            label: "Web app",
            description: "A web application"
          }, {
            label: "CLI tool",
            description: "A command-line tool"
          }],
          multiSelect: false
        }],
        // Pre-fill with "Other" selected to show the textarea
        answers: {
          "Describe your use case in detail": "I'm building a complex application.\\nIt needs web, CLI, and API support.\\nThe architecture should be modular."
        }
      })]
    })],
    gitStatus: {
      dirty: 0
    }
  })} />
}`,...d.parameters?.docs?.source},description:{story:`Test "Other" option with auto-resizing textarea.
Shows the textarea expanded with multi-line content to demonstrate auto-resize.`,...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: AskUserQuestionPending.render,
  decorators: [PhoneWidthDecorator],
  // The play removes the copied rules again, so a snapshot would only repeat the narrow layout.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    const canvas = within(await findQuestionDock(storyRoot));
    const toolTitle = await canvas.findByText(/ask_user_question/, {}, {
      timeout: 8000
    });
    if (!canvas.queryByText("Summary")) {
      await userEvent.click(toolTitle);
    }
    // The card keeps its draft across stories (AskUserQuestionPending answers the first question),
    // so open the first question explicitly.
    const sections = await canvas.findAllByRole("button");
    const approach = sections.find(el => el.tagName === "BUTTON" && (el.textContent ?? "").startsWith("Approach"));
    if (!approach) throw new Error("Approach section button not found");
    await userEvent.click(approach);
    await canvas.findByText("Which approach should we take?", {}, {
      timeout: 8000
    });
    const removeTouchRules = applyTouchPointerRules(canvasElement.ownerDocument);
    try {
      await waitFor(() => {
        const checkbox = storyRoot.querySelector('[role="button"] > button[role="checkbox"]');
        // The checkbox draws its box on this span: the Radix button is an invisible hit area.
        const box = checkbox?.querySelector(':scope > [aria-hidden="true"]');
        const row = checkbox?.parentElement;
        const label = checkbox?.nextElementSibling?.firstElementChild;
        if (!checkbox || !box || !row || !label) {
          throw new Error("Option row, checkbox box or option label not found");
        }
        const b = box.getBoundingClientRect();
        const l = label.getBoundingClientRect();
        const rowHeight = row.getBoundingClientRect().height;
        if (rowHeight < MOBILE_TOUCH_TARGET_PX) {
          throw new Error(\`Option row is \${rowHeight}px tall, under the touch minimum\`);
        }
        const drawnBox = Math.max(b.width, b.height);
        if (drawnBox > 20) {
          throw new Error(\`Checkbox draws a \${drawnBox}px box in an option row\`);
        }
        const centerGap = Math.abs(b.top + b.height / 2 - (l.top + l.height / 2));
        if (centerGap > 2) {
          throw new Error(\`Checkbox sits \${centerGap}px off its option label's line\`);
        }
      });
    } finally {
      removeTouchRules();
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Touch phones give every button and \`role=button\` a 44px minimum (globals.css). An option row is
a \`role=button\`, so the row is the touch target and its checkbox must keep its drawn size on
the line of the option's label (#5835, #6320).

The seeded bug-bash app cannot show this card: the mock AI has no ask_user_question reply. The
Storybook test-runner plays at desktop size and matches no coarse pointer, so the play forces a
phone width with the decorator and copies the coarse-pointer rules itself.`,...m.parameters?.docs?.description}}};const be=["AskUserQuestionPending","AskUserQuestionCompleted","AskUserQuestionNonBlocking","AskUserQuestionOther","AskUserQuestionTouchPhone"];export{u as AskUserQuestionCompleted,h as AskUserQuestionNonBlocking,d as AskUserQuestionOther,c as AskUserQuestionPending,m as AskUserQuestionTouchPhone,be as __namedExportsOrder,ye as default};
