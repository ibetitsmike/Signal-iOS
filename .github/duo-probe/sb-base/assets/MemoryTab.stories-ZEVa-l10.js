import{j as s,aK as y,E as g}from"./iframe-C48Cgo5e.js";import{c as f}from"./orpc-qlMSh58E.js";import{b as v}from"./storyPlayHelpers-_VqAI56j.js";import{MemoryTab as m}from"./MemoryTab-DA5-erex.js";import"./preload-helper-PPVm8Dsz.js";import"./workspace-D5uypDf7.js";import"./autoModelRouting-B76RJT77.js";import"./MemoryBrowser-CMa3nDx7.js";import"./ConfirmationModal-U5ga5P62.js";import"./GoalBoardSections-DsY5YXjt.js";import"./ToggleGroup-DFNW6RD-.js";import"./grip-vertical-CGkNEFDp.js";import"./pin-6tzJ990Y.js";const{expect:i,userEvent:a,waitFor:d,within:r}=__STORYBOOK_MODULE_TEST__,_={title:"Features/RightSidebar/MemoryTab",component:m,parameters:{layout:"fullscreen"}},b="ws-story-memorytab",E=[{path:"/memories/global/preferences.md",scope:"global",description:"Coding style and tooling preferences",pinned:!0,accessCount:12,lastAccessedAt:Date.now()-36e5},{path:"/memories/global/people/reviewers.md",scope:"global",description:"Preferred reviewers per code area",pinned:!1,accessCount:3,lastAccessedAt:Date.now()-864e5},{path:"/memories/global/people/teammates.md",scope:"global",description:"Working agreements with teammates",pinned:!1,accessCount:0,lastAccessedAt:null},{path:"/memories/global/projects/mux/architecture.md",scope:"global",description:"High-level architecture notes",pinned:!1,accessCount:5,lastAccessedAt:Date.now()-6e5},{path:"/memories/project/conventions.md",scope:"project",description:"Repo conventions distilled from AGENTS.md",pinned:!1,accessCount:7,lastAccessedAt:Date.now()-72e5},{path:"/memories/project/testing.md",scope:"project",description:"",pinned:!1,accessCount:0,lastAccessedAt:null},{path:"/memories/workspace/scratch.md",scope:"workspace",description:"Notes for the current branch work",pinned:!1,accessCount:1,lastAccessedAt:Date.now()-6e4}],x=`---
description: Coding style and tooling preferences
---
# Preferences

- Use \`bun\` for every package script.
- Keep diffs small and reviewable.
- Prefer \`rg\` over \`grep\` when searching.

## Validation

\`\`\`bash
make static-check
\`\`\`
`,p={lastRunAt:Date.now()-1800*1e3,trigger:"manual",summary:"Merged duplicate project notes",ops:[{command:"delete",path:"/memories/project/duplicate.md",applied:!0}]};function u(t){return s.jsx(y,{client:f({experiments:{[g.MEMORY_CONSOLIDATION]:!0},memoryFiles:E,memoryFileContents:new Map([["/memories/global/preferences.md",x]]),memoryConsolidationStatus:{workspaceRecord:null,projectRecord:p,globalRecord:p,latestHarvestRecord:{status:"completed",startedAt:Date.now()-2700*1e3,completedAt:Date.now()-2640*1e3,attemptCount:1,boundaryKey:"summary-story",compactionEpoch:3,acceptedCandidates:2,skippedCandidates:1},projectAvailable:!0}}),children:s.jsx("div",{className:"border-border-light h-[480px] border",style:{width:t},children:s.jsx(m,{workspaceId:b})})})}const n={parameters:{pixel:{exclude:!0}},render:()=>u("360px"),play:async({canvasElement:t})=>{const e=r(t);await e.findByText("preferences.md"),await e.findByText(/Project:/),await e.findByText(/Harvest: completed/),await e.findByText("scratch.md")}},o={render:()=>u("360px"),play:async({canvasElement:t})=>{const e=r(t),h=await e.findByText("preferences.md");await a.click(h),await e.findByRole("heading",{name:"Preferences"}),await d(()=>{for(const l of["yaml","bash"])if(!t.querySelector(`[data-code-language="${l}"] .code-line span`))throw new Error(`${l} block is not highlighted yet`)}),await i(e.queryByRole("textbox",{name:"Memory file content"})).toBeNull();const c=e.getByRole("button",{name:"Preview"});await a.hover(c);const w=await r(document.body).findByRole("tooltip");await i(w.querySelector(".mobile-hide-shortcut-hints")).not.toBeNull(),await a.unhover(c),await a.keyboard("{Escape}"),await d(()=>i(r(document.body).queryByRole("tooltip")).toBeNull()),await a.hover(t),v()}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  parameters: {
    pixel: {
      // Duplicates the same tree permutations covered by Settings/MemorySection.WithFiles, while
      // Chromium rasterizes its nested rounded borders/chevrons nondeterministically.
      exclude: true
    }
  },
  render: () => renderTab("360px"),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await canvas.findByText("preferences.md");
    await canvas.findByText(/Project:/);
    await canvas.findByText(/Harvest: completed/);
    await canvas.findByText("scratch.md");
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => renderTab("360px"),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const row = await canvas.findByText("preferences.md");
    await userEvent.click(row);
    // Markdown files open in the rendered preview, frontmatter as a yaml block.
    await canvas.findByRole("heading", {
      name: "Preferences"
    });
    // Wait for Shiki tokens so the snapshot never captures unhighlighted code.
    await waitFor(() => {
      for (const language of ["yaml", "bash"]) {
        if (!canvasElement.querySelector(\`[data-code-language="\${language}"] .code-line span\`)) {
          throw new Error(\`\${language} block is not highlighted yet\`);
        }
      }
    });
    await expect(canvas.queryByRole("textbox", {
      name: "Memory file content"
    })).toBeNull();
    // Pixel does not emulate touch, so pin the class that hides the shortcut on touch screens.
    const toggle = canvas.getByRole("button", {
      name: "Preview"
    });
    await userEvent.hover(toggle);
    const tooltip = await within(document.body).findByRole("tooltip");
    await expect(tooltip.querySelector(".mobile-hide-shortcut-hints")).not.toBeNull();
    await userEvent.unhover(toggle);
    // Radix keeps a hoverable tooltip open after pointerleave until a pointermove leaves its
    // grace area, which a synthetic unhover never sends, so close it with Escape.
    await userEvent.keyboard("{Escape}");
    await waitFor(() => expect(within(document.body).queryByRole("tooltip")).toBeNull());
    await userEvent.hover(canvasElement);
    blurActiveElement();
  }
}`,...o.parameters?.docs?.source}}};const I=["List","Editor"];export{o as Editor,n as List,I as __namedExportsOrder,_ as default};
