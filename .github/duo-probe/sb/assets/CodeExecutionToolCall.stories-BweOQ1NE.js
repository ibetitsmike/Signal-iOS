import{cs as c,j as t,ct as i,cu as m,d as u,c7 as g}from"./iframe-DS5VyXLs.js";import{l as f}from"./meta-BWzge-eA.js";import"./preload-helper-PPVm8Dsz.js";import"./workspaceActionHandlers-Dv3BeV3N.js";import"./pin-fK8qQ2Fu.js";import"./AgentListItem-CAAmLyAa.js";import"./useWorkspaceStreamingStatusPhase-CjjTic4i.js";import"./shield-BbzLR52p.js";import"./AIView-Bsvwuvut.js";import"./shell-DJ7G-zZU.js";import"./useTranscriptContextMenu-DNmeKPvc.js";import"./ConfirmationModal-D10R7Urj.js";import"./slashCommandHints-BSKyjYjN.js";import"./ToggleGroup-Cthcbmic.js";import"./sendDispatchModes-Coi3kdkT.js";import"./timelineReveal-B9mUteaZ.js";import"./RightSidebar-C9xoLIA6.js";import"./PlanFileDialog-a1c-6TsR.js";import"./diffParser-x37EWTfF.js";import"./TimelinePanel-BhqA7Mw3.js";import"./TerminalRouterContext-BVlTfB7S.js";import"./ForceDeleteModal-Dhwxawg2.js";const U={...f,title:"App/Chat/Tools/CodeExecution",component:c},_="storybook-code-execution",p=17e11,d=`const content = await mux.file_read({ path: "src/config.ts" });
console.log("Read file with", content.lines_read, "lines");

await mux.file_edit_replace_string({
  path: "src/config.ts",
  old_string: "debug: false",
  new_string: "debug: true"
});

return "Done!";`,h=`type Result = { name: string; score: number };

function analyze(items: Array<{ name: string; value: number }>): Result[] {
  return items
    .filter((item) => item.value > 0)
    .map((item) => ({ name: item.name, score: item.value * 1.5 }));
}

const data = [{ name: "alpha", value: 10 }, { name: "beta", value: 0 }];
const results = analyze(data);
console.log("Processed", results.length, "items");
return results;`;function y(s){const e=u.c(2);let a;return e[0]!==s.children?(a=t.jsx(g,{workspaceId:_,children:t.jsx("div",{className:"bg-background p-6",children:t.jsx("div",{className:"w-full max-w-3xl",children:s.children})})}),e[0]=s.children,e[1]=a):a=e[1],a}const b={success:!0,result:"Done!",toolCalls:[{toolName:"file_read",args:{path:"src/config.ts"},result:{success:!0,lines_read:42},duration_ms:15},{toolName:"file_edit_replace_string",args:{path:"src/config.ts",old_string:"debug: false",new_string:"debug: true"},result:{success:!0,edits_applied:1},duration_ms:23}],consoleOutput:[{level:"log",args:["Read file with",42,"lines"],timestamp:p}],duration_ms:120},x=[{toolCallId:"nested-1",toolName:"file_read",input:{path:"src/config.ts"},output:{success:!0,lines_read:42,file_size:1024},state:"output-available"},{toolCallId:"nested-2",toolName:"file_edit_replace_string",input:{path:"src/config.ts",old_string:"debug: false",new_string:"debug: true"},output:{success:!0,edits_applied:1},state:"output-available"}];function l(s){const e=u.c(7);let a;e[0]!==s.label?(a=t.jsx("h3",{className:"text-muted-foreground text-xs font-semibold tracking-wide uppercase",children:s.label}),e[0]=s.label,e[1]=a):a=e[1];let n;e[2]!==s.cardProps?(n=t.jsx(c,{...s.cardProps}),e[2]=s.cardProps,e[3]=n):n=e[3];let o;return e[4]!==a||e[5]!==n?(o=t.jsxs("section",{className:"flex flex-col gap-2",children:[a,n]}),e[4]=a,e[5]=n,e[6]=o):o=e[6],o}const A="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==",C=[{toolCallId:"nested-attach-1",toolName:"attach_file",input:{path:"board.png"},output:{type:"content",value:[{type:"text",text:"Attached board.png"},{type:"media",data:i,mediaType:"image/png",filename:"board.png"},{type:"media",data:i,mediaType:"application/pdf",filename:"report.pdf"},{type:"display_file",data:m,mediaType:"text/markdown",filename:"notes.md",providerOptions:{mux:{displayOnly:!0,size:38}}}]},state:"output-available"}],r={render:()=>t.jsx(y,{children:t.jsxs("div",{className:"flex flex-col gap-8",children:[t.jsx(l,{label:"Completed (nested tool calls)",cardProps:{args:{code:d},result:b,status:"completed",nestedCalls:x}}),t.jsx(l,{label:"Completed (carrier attachments: image, PDF, display-only file; nested stub cards suppressed)",cardProps:{args:{code:'await mux.attach_file({ path: "board.png" });'},nestedCalls:C,result:{success:!0,result:{attached:!0},toolCalls:[{toolName:"attach_file",args:{path:"board.png"},duration_ms:12}],consoleOutput:[],duration_ms:30,attachments:[{type:"media",data:A,mediaType:"image/png",filename:"board.png"},{type:"media",data:"JVBERi0xLjQK",mediaType:"application/pdf",filename:"report.pdf"},{type:"display_file",data:"IyBOb3RlcwoKQ2FycmllZCBkaXNwbGF5LW9ubHkgbWFya2Rvd24u",mediaType:"text/markdown",filename:"notes.md",providerOptions:{mux:{displayOnly:!0,size:38}}}]},status:"completed"}}),t.jsx(l,{label:"Executing (one done, one in-progress)",cardProps:{args:{code:d},status:"executing",nestedCalls:[{toolCallId:"nested-1",toolName:"file_read",input:{path:"src/config.ts"},output:{success:!0,lines_read:42,file_size:1024},state:"output-available"},{toolCallId:"nested-2",toolName:"file_edit_replace_string",input:{path:"src/config.ts",old_string:"debug: false",new_string:"debug: true"},state:"input-available"}]}}),t.jsx(l,{label:"Failed (error result)",cardProps:{args:{code:'await mux.file_read({ path: "missing.ts" });'},result:{success:!1,error:"Tool execution failed: ENOENT: no such file or directory, open 'missing.ts'",toolCalls:[{toolName:"file_read",args:{path:"missing.ts"},error:"ENOENT: no such file or directory",duration_ms:8}],consoleOutput:[],duration_ms:20},status:"failed",nestedCalls:[{toolCallId:"nested-1",toolName:"file_read",input:{path:"missing.ts"},output:{error:"ENOENT: no such file or directory"},state:"output-available"}]}}),t.jsx(l,{label:"Syntax highlighting (no tool calls)",cardProps:{args:{code:h},result:{success:!0,result:[{name:"alpha",score:15}],toolCalls:[],consoleOutput:[{level:"log",args:["Processed",1,"items"],timestamp:p}],duration_ms:45},status:"completed",nestedCalls:[]}})]})})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <StoryShell>
      <div className="flex flex-col gap-8">
        <GallerySection label="Completed (nested tool calls)" cardProps={{
        args: {
          code: SAMPLE_CODE
        },
        result: completedResult,
        status: "completed",
        nestedCalls: completedNestedCalls
      }} />
        <GallerySection label="Completed (carrier attachments: image, PDF, display-only file; nested stub cards suppressed)" cardProps={{
        args: {
          code: \`await mux.attach_file({ path: "board.png" });\`
        },
        nestedCalls: strippedNestedAttachFile,
        result: {
          success: true,
          result: {
            attached: true
          },
          toolCalls: [{
            toolName: "attach_file",
            args: {
              path: "board.png"
            },
            duration_ms: 12
          }],
          consoleOutput: [],
          duration_ms: 30,
          attachments: [{
            type: "media",
            data: RED_DOT_PNG,
            mediaType: "image/png",
            filename: "board.png"
          },
          // PDF: the image gallery refuses it, so it must render as a
          // download card instead of disappearing.
          {
            type: "media",
            data: "JVBERi0xLjQK",
            mediaType: "application/pdf",
            filename: "report.pdf"
          }, {
            type: "display_file",
            data: "IyBOb3RlcwoKQ2FycmllZCBkaXNwbGF5LW9ubHkgbWFya2Rvd24u",
            mediaType: "text/markdown",
            filename: "notes.md",
            providerOptions: {
              mux: {
                displayOnly: true,
                size: 38
              }
            }
          }]
        },
        status: "completed"
      }} />
        <GallerySection label="Executing (one done, one in-progress)" cardProps={{
        args: {
          code: SAMPLE_CODE
        },
        status: "executing",
        nestedCalls: [{
          toolCallId: "nested-1",
          toolName: "file_read",
          input: {
            path: "src/config.ts"
          },
          output: {
            success: true,
            lines_read: 42,
            file_size: 1024
          },
          state: "output-available"
        }, {
          toolCallId: "nested-2",
          toolName: "file_edit_replace_string",
          input: {
            path: "src/config.ts",
            old_string: "debug: false",
            new_string: "debug: true"
          },
          state: "input-available"
        }]
      }} />
        <GallerySection label="Failed (error result)" cardProps={{
        args: {
          code: \`await mux.file_read({ path: "missing.ts" });\`
        },
        result: {
          success: false,
          error: "Tool execution failed: ENOENT: no such file or directory, open 'missing.ts'",
          toolCalls: [{
            toolName: "file_read",
            args: {
              path: "missing.ts"
            },
            error: "ENOENT: no such file or directory",
            duration_ms: 8
          }],
          consoleOutput: [],
          duration_ms: 20
        },
        status: "failed",
        nestedCalls: [{
          toolCallId: "nested-1",
          toolName: "file_read",
          input: {
            path: "missing.ts"
          },
          output: {
            error: "ENOENT: no such file or directory"
          },
          state: "output-available"
        }]
      }} />
        <GallerySection label="Syntax highlighting (no tool calls)" cardProps={{
        args: {
          code: SYNTAX_HIGHLIGHT_CODE
        },
        result: {
          success: true,
          result: [{
            name: "alpha",
            score: 15
          }],
          toolCalls: [],
          consoleOutput: [{
            level: "log",
            args: ["Processed", 1, "items"],
            timestamp: STABLE_TIMESTAMP
          }],
          duration_ms: 45
        },
        status: "completed",
        nestedCalls: []
      }} />
      </div>
    </StoryShell>
}`,...r.parameters?.docs?.source}}};const J=["Gallery"];export{r as Gallery,J as __namedExportsOrder,U as default};
