import{j as m,aZ as g,bt as f}from"./iframe-C48Cgo5e.js";import"./preload-helper-PPVm8Dsz.js";const{expect:h}=__STORYBOOK_MODULE_TEST__,b={title:"Features/RightSidebar/WorkflowPhaseFlow",component:g,parameters:{layout:"centered",backgrounds:{default:"dark"},viewport:{options:{phone390:{name:"Phone 390",styles:{width:"390px",height:"844px"},type:"mobile"}}}},decorators:[n=>m.jsx(f,{forcedTheme:"dark",children:m.jsx("div",{className:"bg-background text-foreground border-border w-[min(430px,90vw)] rounded-xl border p-4",children:m.jsx(n,{})})})]},e=[{name:"scope",label:"Scope",lifecycle:"pending",description:"Pick research angles"},{name:"search-fetch",label:"Search & Fetch",lifecycle:"pending",parallel:!0},{name:"verify",label:"Verify",lifecycle:"pending",parallel:!0},{name:"synthesize",label:"Synthesize",lifecycle:"pending"}];function p(n){return e.map((d,u)=>({...d,lifecycle:n[u]??d.lifecycle}))}const r={args:{nodes:e,provenance:"declared"}},a={args:{nodes:[{...e[0],lifecycle:"completed"},{...e[1],lifecycle:"completed"},{name:"recover-fetch",label:"recover-fetch",lifecycle:"completed",description:"Observed phase the script did not declare"},{...e[2],lifecycle:"running"},{...e[3],lifecycle:"pending"}],provenance:"declared",onPhaseSelect:()=>{}}},c={args:{nodes:p(["completed","running","completed","pending"]),provenance:"declared"}},t={args:{nodes:p(["completed","completed","skipped","completed"]),provenance:"declared"}},o={args:{nodes:p(["completed","failed","not-reached","not-reached"]),provenance:"declared"}},s={args:{nodes:p(["completed","interrupted","not-reached","not-reached"]),provenance:"declared"}},i={args:{nodes:[{name:"scope",label:"scope",lifecycle:"completed"},{name:"audit",label:"audit",lifecycle:"not-visited"},{name:"load-findings",label:"load-findings",lifecycle:"completed"},{name:"report",label:"report",lifecycle:"completed"}],provenance:"inferred"}},l={globals:{viewport:{value:"phone390",isRotated:!1}},parameters:{pixel:{matrix:{viewports:["phone"]}}},play:async({parameters:n,globals:d})=>{await h(n).toMatchObject({pixel:{matrix:{viewports:["phone"]}}}),await h(d).toMatchObject({viewport:{value:"phone390"}})},args:{nodes:[{...e[0],lifecycle:"completed"},{...e[1],lifecycle:"running"},{...e[2],lifecycle:"pending"},{...e[3],lifecycle:"pending"},{name:"long-tail-phase-name-that-truncates",label:"long-tail-phase-name-that-truncates",lifecycle:"pending"}],provenance:"declared"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: DECLARED_NODES,
    provenance: "declared"
  }
}`,...r.parameters?.docs?.source},description:{story:"Pre-run preview: every declared phase pending.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: [{
      ...DECLARED_NODES[0],
      lifecycle: "completed"
    }, {
      ...DECLARED_NODES[1],
      lifecycle: "completed"
    }, {
      name: "recover-fetch",
      label: "recover-fetch",
      lifecycle: "completed",
      description: "Observed phase the script did not declare"
    }, {
      ...DECLARED_NODES[2],
      lifecycle: "running"
    }, {
      ...DECLARED_NODES[3],
      lifecycle: "pending"
    }],
    provenance: "declared",
    onPhaseSelect: () => undefined
  }
}`,...a.parameters?.docs?.source},description:{story:"Mid-run: phase 2 running, later phases pending, plus a dynamic detour phase.",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: withLifecycles(["completed", "running", "completed", "pending"]),
    provenance: "declared"
  }
}`,...c.parameters?.docs?.source},description:{story:"Loop re-entry: an earlier phase is running again after later phases were visited.",...c.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: withLifecycles(["completed", "completed", "skipped", "completed"]),
    provenance: "declared"
  }
}`,...t.parameters?.docs?.source},description:{story:"Completed run where a declared phase was never visited.",...t.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: withLifecycles(["completed", "failed", "not-reached", "not-reached"]),
    provenance: "declared"
  }
}`,...o.parameters?.docs?.source},description:{story:"Failed run: failing phase marked, tail not reached.",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: withLifecycles(["completed", "interrupted", "not-reached", "not-reached"]),
    provenance: "declared"
  }
}`,...s.parameters?.docs?.source},description:{story:"Interrupted run: latest phase paused, tail not reached.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    nodes: [{
      name: "scope",
      label: "scope",
      lifecycle: "completed"
    }, {
      name: "audit",
      label: "audit",
      lifecycle: "not-visited"
    }, {
      name: "load-findings",
      label: "load-findings",
      lifecycle: "completed"
    }, {
      name: "report",
      label: "report",
      lifecycle: "completed"
    }],
    provenance: "inferred"
  }
}`,...i.parameters?.docs?.source},description:{story:"Inferred rail: provenance hint visible, terminal-unvisited phases stay neutral.",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  globals: {
    viewport: {
      value: "phone390",
      isRotated: false
    }
  },
  parameters: {
    pixel: {
      matrix: {
        viewports: ["phone"]
      }
    }
  },
  // Static contract: the pinned Pixel variant and the local viewport must stay
  // paired, or this story silently snapshots the wrong width.
  play: async ({
    parameters,
    globals
  }) => {
    await expect(parameters).toMatchObject({
      pixel: {
        matrix: {
          viewports: ["phone"]
        }
      }
    });
    await expect(globals).toMatchObject({
      viewport: {
        value: "phone390"
      }
    });
  },
  args: {
    nodes: [{
      ...DECLARED_NODES[0],
      lifecycle: "completed"
    }, {
      ...DECLARED_NODES[1],
      lifecycle: "running"
    }, {
      ...DECLARED_NODES[2],
      lifecycle: "pending"
    }, {
      ...DECLARED_NODES[3],
      lifecycle: "pending"
    }, {
      name: "long-tail-phase-name-that-truncates",
      label: "long-tail-phase-name-that-truncates",
      lifecycle: "pending"
    }],
    provenance: "declared"
  }
}`,...l.parameters?.docs?.source},description:{story:"Narrow-container wrap behavior at phone width.",...l.parameters?.docs?.description}}};const w=["PreRunAllPending","MidRunWithDynamicPhase","LoopReentry","CompletedWithSkippedPhase","FailedRun","InterruptedRun","InferredRail","MobileNarrow"];export{t as CompletedWithSkippedPhase,o as FailedRun,i as InferredRail,s as InterruptedRun,c as LoopReentry,a as MidRunWithDynamicPhase,l as MobileNarrow,r as PreRunAllPending,w as __namedExportsOrder,b as default};
