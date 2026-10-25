import{j as c,i as _,d as x,S as h}from"./iframe-DpCW2UOM.js";import{a as d,P as w,A as y}from"./meta-BwRgvoZ6.js";import{a as f,c as k}from"./messages-BbMCeQNx.js";import{s as g}from"./chatSetup-48_rCYsC.js";import{w as A}from"./storyPlayHelpers-_VqAI56j.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Deyyg-fE.js";import"./pin-DuIYkyHL.js";import"./AgentListItem-3Vf8Zgi1.js";import"./useWorkspaceStreamingStatusPhase-CJy2TqN5.js";import"./shield-CrYDrR4O.js";import"./AIView-CvG2HY8V.js";import"./shell-ZYrtNCUY.js";import"./useTranscriptContextMenu-DyvYQxLv.js";import"./ConfirmationModal-DQrDMilx.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-D1Db6hA_.js";import"./sendDispatchModes-Cm5_ciDl.js";import"./timelineReveal-B8CyznN7.js";import"./RightSidebar-tIpngg7n.js";import"./PlanFileDialog-95EwQO2o.js";import"./diffParser-DScks9Dr.js";import"./TimelinePanel-BSxjzr0t.js";import"./TerminalRouterContext-CQ8sOp19.js";import"./ForceDeleteModal-BhMJFUD7.js";import"./workspaces-MVQPvkVv.js";import"./workspace-D5uypDf7.js";import"./orpc-DLtOjQkt.js";import"./autoModelRouting-BdgCPOKg.js";import"./git-Ekgdg9se.js";const{expect:p,userEvent:P,waitFor:r,within:E}=__STORYBOOK_MODULE_TEST__,ne={...d,title:"App/PhoneViewports/Overflow"};function T(t){const e=x.c(3);let a;e[0]===Symbol.for("react.memo_cache_sentinel")?(a={width:390,height:844,overflow:"hidden"},e[0]=a):a=e[0];let o;return e[1]!==t?(o=c.jsx("div",{style:a,children:c.jsx(t,{})}),e[1]=t,e[2]=o):o=e[2],o}const v=["set -euo pipefail","for i in 1 2 3; do",`  curl -sS https://api.anthropic.com/v1/messages -H "content-type: application/json" -H "x-api-key: $ANTHROPIC_API_KEY" -H "anthropic-version: 2023-06-01" -d '{"model":"claude-haiku-4-5","max_tokens":64}'`,"  sleep 5","done","echo one","echo two","echo three","echo four","echo five"].join(`
`),m="bugbash-playground-with-a-long-name",B=JSON.stringify({number:5769,url:"https://github.com/a-long-organization-name/a-long-repository-name/pull/5769",state:"OPEN",mergeable:"MERGEABLE",mergeStateStatus:"CLEAN",title:"Phone footer fits",isDraft:!1,headRefName:m,baseRefName:"main",statusCheckRollup:[]});function S(t,e){return Promise.resolve({success:!0,output:e.includes("gh pr view")?B:"",exitCode:0,wall_duration_ms:5})}const l={globals:{viewport:{value:"mobile2",isRotated:!1}},render:()=>c.jsx(y,{setup:()=>g({workspaceId:"ws-phone-overflow",workspaceName:m,projectName:"demo-app",executeBash:S,messages:[f("msg-1","Call the API three times",{historySequence:1,timestamp:h-6e4}),k("msg-2","Done.",{historySequence:2,timestamp:h-5e4,toolCalls:[{type:"dynamic-tool",toolCallId:"call-bash-long",toolName:"bash",state:"output-available",input:{script:v,timeout_secs:30,run_in_background:!1,display_name:"Call the API"},output:{success:!0,output:"ok",exitCode:0,wall_duration_ms:900}}]})]})}),decorators:[T],parameters:{...d.parameters,pixel:w},play:async({canvasElement:t})=>{const e=document.getElementById("storybook-root")??t;await A(e);const a=window.matchMedia(`(max-width: ${_}px)`).matches,o=await r(()=>{const i=e.querySelector('[data-testid="workspace-footer-bar"] > div');if(!i)throw new Error("Footer row not rendered");return i});await r(()=>{if(!a&&!o.textContent?.includes("Last prompt"))throw new Error("Footer still loading");if(!e.querySelector('[data-testid="workspace-footer-repository"]'))throw new Error("PR repository label not shown yet");p(o.scrollWidth).toBeLessThanOrEqual(o.clientWidth)});const[b]=await E(e).findAllByText(/^set -euo pipefail/);await P.click(b);const s=await r(()=>{const i=[...e.querySelectorAll("pre")].find(R=>R.textContent?.startsWith("set -euo pipefail"));if(!i)throw new Error("Script block not expanded");return i});await r(()=>p(s.scrollHeight).toBeGreaterThan(s.clientHeight));const u=()=>getComputedStyle(s).getPropertyValue("--scroll-fade-end").trim();await r(()=>p(u()).not.toMatch(/^(0px)?$/)),s.scrollTop=s.scrollHeight,await r(()=>p(u()).toBe("0px"))}},n={render:()=>c.jsx(y,{setup:()=>g({workspaceId:"ws-phone-footer-touch",workspaceName:m,projectName:"demo-app",gitStatus:{ahead:2,dirty:1,outgoingAdditions:635,outgoingDeletions:67,headBranch:m},executeBash:S,messages:[f("msg-1","Check the footer",{historySequence:1,timestamp:h})]})}),parameters:{...d.parameters,pixel:w},play:async({canvasElement:t})=>{const e=document.getElementById("storybook-root")??t;await r(()=>{if(!e.querySelector('[data-testid="workspace-footer-repository"]'))throw new Error("PR repository label not shown yet");if(!E(e).queryByRole("button",{name:"Copy branch name"}))throw new Error("Branch not resolved yet")})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  // A phone viewport for local viewing (the fixed frame does not move innerWidth).
  globals: {
    viewport: {
      value: "mobile2",
      isRotated: false
    }
  },
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-phone-overflow",
    // A long branch name: the footer row must truncate it instead of scrolling sideways.
    workspaceName: LONG_BRANCH,
    projectName: "demo-app",
    executeBash: detectLongRepoPR,
    messages: [createUserMessage("msg-1", "Call the API three times", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP - 60000
    }), createAssistantMessage("msg-2", "Done.", {
      historySequence: 2,
      timestamp: STABLE_TIMESTAMP - 50000,
      toolCalls: [{
        type: "dynamic-tool",
        toolCallId: "call-bash-long",
        toolName: "bash",
        state: "output-available",
        input: {
          script: LONG_SCRIPT,
          timeout_secs: 30,
          run_in_background: false,
          display_name: "Call the API"
        },
        output: {
          success: true,
          output: "ok",
          exitCode: 0,
          wall_duration_ms: 900
        }
      }]
    })]
  })} />,
  decorators: [PhoneFrame],
  // No Pixel capture: the snapshot budget (scripts/check-storybook-snapshot-budget.mjs) is full,
  // and Pixel's animation reset would also remove the scroll-driven fade this story checks.
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitForScrollStabilization(storyRoot);
    const narrow = window.matchMedia(\`(max-width: \${NARROW_VIEWPORT_MAX_WIDTH_PX}px)\`).matches;
    const footerRow = await waitFor(() => {
      const row = storyRoot.querySelector<HTMLElement>('[data-testid="workspace-footer-bar"] > div');
      if (!row) throw new Error("Footer row not rendered");
      return row;
    });
    await waitFor(() => {
      // Phone widths drop "Last prompt" from the footer; wider windows (the test runner) still
      // wait for it so the fit check covers the full row.
      if (!narrow && !footerRow.textContent?.includes("Last prompt")) {
        throw new Error("Footer still loading");
      }
      if (!storyRoot.querySelector('[data-testid="workspace-footer-repository"]')) {
        throw new Error("PR repository label not shown yet");
      }
      // Everything fits: nothing sits past the right edge, so no item can look missing.
      void expect(footerRow.scrollWidth).toBeLessThanOrEqual(footerRow.clientWidth);
    });

    // The collapsed header shows the script's first line (a tooltip can repeat it).
    const [header] = await within(storyRoot).findAllByText(/^set -euo pipefail/);
    await userEvent.click(header);
    const script = await waitFor(() => {
      const pre = [...storyRoot.querySelectorAll("pre")].find(el => el.textContent?.startsWith("set -euo pipefail"));
      if (!pre) throw new Error("Script block not expanded");
      return pre;
    });
    // The block is capped, so part of the command is below the cut ...
    await waitFor(() => expect(script.scrollHeight).toBeGreaterThan(script.clientHeight));
    const bottomFade = () => getComputedStyle(script).getPropertyValue("--scroll-fade-end").trim();
    // ... and the bottom edge fades out to say so.
    await waitFor(() => expect(bottomFade()).not.toMatch(/^(0px)?$/));
    // Scrolled to the end, nothing is cut, so the bottom fade goes away.
    script.scrollTop = script.scrollHeight;
    await waitFor(() => expect(bottomFade()).toBe("0px"));
  }
}`,...l.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <AppWithMocks setup={() => setupSimpleChatStory({
    workspaceId: "ws-phone-footer-touch",
    workspaceName: LONG_BRANCH,
    projectName: "demo-app",
    gitStatus: {
      ahead: 2,
      dirty: 1,
      outgoingAdditions: 635,
      outgoingDeletions: 67,
      headBranch: LONG_BRANCH
    },
    executeBash: detectLongRepoPR,
    messages: [createUserMessage("msg-1", "Check the footer", {
      historySequence: 1,
      timestamp: STABLE_TIMESTAMP
    })]
  })} />,
  parameters: {
    ...appMeta.parameters,
    pixel: PIXEL_DISABLED
  },
  play: async ({
    canvasElement
  }) => {
    const storyRoot = document.getElementById("storybook-root") ?? canvasElement;
    await waitFor(() => {
      if (!storyRoot.querySelector('[data-testid="workspace-footer-repository"]')) {
        throw new Error("PR repository label not shown yet");
      }
      // Git status reports the branch and the diff numbers together.
      if (!within(storyRoot).queryByRole("button", {
        name: "Copy branch name"
      })) {
        throw new Error("Branch not resolved yet");
      }
    });
  }
}`,...n.parameters?.docs?.source},description:{story:`The phone footer at its fullest: diff numbers and a long PR repo leave the branch little width.
Plays cannot emulate a coarse pointer, so the test runner's postVisit hook replays this story
on a touch-emulated small phone and fails if the row clips a control below its touch target.
The play only waits until everything that row shows has loaded.`,...n.parameters?.docs?.description}}};const pe=["FooterAndScriptBlock","FooterTouchTargets"];export{l as FooterAndScriptBlock,n as FooterTouchTargets,pe as __namedExportsOrder,ne as default};
