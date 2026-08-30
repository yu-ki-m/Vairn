---
name: vairn
description: "Access Vairn through MCP: establish context from the active canvas, inspect workspace data, and safely read or modify Vairn canvases."
---

# Vairn

Use this skill whenever the user asks to use Vairn, Vairn MCP, or inspect or modify a Vairn canvas or workspace.

## Goal
- Reduce the overhead of reaching the Vairn workspace.
- Prefer the shortest path that works consistently.
- Avoid unnecessary configuration checks before trying the live MCP path.
- At the start of an access session, understand the canvas currently open in Vairn, including its readable content and structural context, before proposing or applying changes.
- Extend an existing canvas according to its local visual and structural grammar, not merely its written content.

## Preferred workflow
1. Use the Vairn MCP server directly first.
2. Initialize a session as the first step if the server is reachable.
3. Call `vairn_get_active_canvas` to identify the currently open canvas. It uses the live UI canvas when available and otherwise returns the saved active canvas.
4. If it returns a `canvasId`, call `vairn_get_canvas` with `{ "canvasId": "…", "detail": "full" }` and follow every `nextCursor` until it is `null`. The active-canvas result is only a body-free summary; the full canvas read is required to understand written content.
5. If the active result has `resolution: "ui-session"` and a viewport, call `vairn_render_canvas` with `{ "target": { "kind": "activeViewport" } }`. Otherwise use the smallest relevant `canvas`, `view`, `objects`, or `bounds` target when a visual check is needed. Inspect the returned image as well as its revision and bounds.
6. Form a short internal context summary before acting: canvas purpose, visible structure and arrows, important text/code/table content, views/layers, linked files, local layout and notation patterns, visible hierarchy/overlap/wrapping, and any unclear or conflicting information.
7. Use `vairn_get_workspace_overview` when the request involves another canvas, workspace organization, or writable/reference-mode status.
8. Only if MCP is unavailable, fall back to local config files or backend status checks.

## Recommended order
- First: initialize MCP session
- Second: call `vairn_get_active_canvas`
- Third: read that canvas in `full` detail, including all cursor pages
- Fourth: render the active viewport (or a smallest relevant saved scope) and inspect visual context
- Fifth: establish the canvas context from the read result and rendered image
- Sixth: call `vairn_get_workspace_overview` or read a user-specified target when necessary
- Seventh: perform the requested mutation or annotation

## Initial canvas-context rule
- Treat the canvas returned by `vairn_get_active_canvas` as the initial context canvas, even when the user did not explicitly name a canvas.
- Do not write to an existing canvas until its full readable content has been inspected in the current session. A structural result, canvas title, or cached prior conversation is not sufficient.
- If `resolution` is `no_ui_session` or `canvasId` is `null`, use `vairn_get_workspace_overview` to locate a user-named target. If no target is named, explain that no active canvas is available and ask the user which canvas to use; do not guess from recency or title alone.
- If `vairn_get_canvas` returns a `nextCursor`, keep calling the same tool with that cursor before treating the canvas as understood. If a full response is too large, use its structure plus targeted `vairn_get_node` calls and `vairn_search` to cover the relevant content, and state any remaining gap.
- When the task depends on visual layout, call `vairn_render_canvas` before deciding on an existing-canvas change. Prefer `activeViewport` only when its live UI resolution is available; it must never be inferred from a saved active canvas. Use the narrowest saved scope that contains the proposed change otherwise.
- Before answering a request about the open canvas, briefly ground the response in the context just read. Do not expose unrelated or sensitive canvas content unless it is needed for the user's request.

## Existing-canvas extension contract
- Before writing to an existing canvas, derive an internal extension contract from the relevant local precedent. Capture the semantic role, node types and dimensions, text format, style, spatial arrangement, arrow topology, and View/Layer membership.
- Map every proposed object to its structural role: identify its parent, sibling, attached object, or independent annotation. Do not treat a request to add a subordinate concept to a graph as a request for an unconnected summary card.
- Preserve local invariants unless the user asks to change them. Examples: repeated card format, heading/body granularity, parent-child arrow pattern, ordering, and the visible canvas or view in which the work belongs.
- Treat the existing canvas's grammar as higher priority than generic defaults. A dedicated AI View or AI Layer governs ownership and edit isolation; it must not, by itself, change the user-visible notation, hierarchy, or placement of an extension.
- Interpret “add” to an existing diagram as an in-place structural extension by default. Use a separate annotation or summary only when the request says to annotate, summarize, document separately, or the local canvas has a clear annotation convention.
- If two materially different structural interpretations remain plausible after reading the canvas, state the alternatives and ask one concise question before writing.

## Pre-write consistency gate
- Before `vairn_batch_edit`, check the planned delta against the extension contract: each new object has a role and placement, follows the relevant local format, has the required relationships/arrows, and leaves unrelated objects unchanged.
- For a repeated concept hierarchy, verify coverage and correspondence: each intended parent has the planned child or annotation, and each child is connected or grouped in the same way as the local pattern requires.
- If the plan fails this check, rebuild it from the local precedent instead of applying a generic layout.
- After a successful existing-canvas edit, call `vairn_render_canvas` again for the same or narrower affected target. Verify the returned revision advanced and the image has no unintended overlap, clipping, broken arrow visibility, or layout drift before reporting completion.

## Practical rules
- Do not start by inspecting unrelated config files.
- Do not ask the user to restart the app unless the MCP endpoint is clearly unreachable.
- Prefer the live workspace state over cached assumptions.
- Keep the initial read targeted, but complete enough to establish the active canvas's meaning before mutating it.
- Use the `revision` returned by `vairn_get_canvas` as the `expectedRevision` for a following `vairn_batch_edit`. If it conflicts, reread the canvas and rebuild the change from the latest context.
- For an existing canvas, check its overview entry before a write. Do not write when `aiWritable` is false or `referenceMode` is true; explain the gate instead.
- When annotating existing user work, prefer a dedicated AI View and AI Layer. Keep user-created objects intact unless the user explicitly requests a deletion and completes Vairn's confirmation flow. When the request extends an existing diagram, preserve its visible grammar even if the new objects are AI-owned.

## Notes and cautions
- Start with MCP session initialization before any read or write request.
- If a call fails, retry the same live path once rather than jumping to unrelated checks.
- `vairn_get_active_canvas` identifies the current canvas but does not return its body. Always follow it with `vairn_get_canvas` in `full` detail before interpreting its written content.
- `vairn_render_canvas` returns a PNG image block plus metadata, not browser automation or a remote page fetch. It renders saved native nodes/arrows/strokes; externally sourced iframe, Draw.io, and image content may be a safe placeholder and must not be mistaken for a failed MCP connection.
- `vairn_get_workspace_overview` returns the workspace tree and body-free summaries. It is the right source for canvas selection and write gates, not a substitute for reading canvas contents.
- Avoid overly broad reads at the beginning: start with the active canvas, then expand to other canvases only when the request requires it.
- In environments where the source code cannot be inspected directly, rely on the live MCP workspace view instead of local file inspection.
- If the endpoint is clearly unavailable, only then consider backend or config checks as a fallback.

## Useful defaults
- MCP endpoint: http://127.0.0.1:4319/mcp
- Protocol version: 2025-11-25
- Session initialization should happen before any read/write call.
- For initial canvas work, use `vairn_get_active_canvas`, then `vairn_get_canvas` with `detail: "full"`, then `vairn_render_canvas` for the live viewport or smallest relevant saved scope.
- Use `vairn_get_workspace_overview` next only when the task needs workspace-level context, a different canvas, or write-gate information.

## Example intent
- “Vairn に素早く入って最新状態を確認して”
- “Vairn へすぐアクセスしてキャンバスを見たい”
- “Vairn でこのキャンバスの内容をすぐ確認したい”
- “開いているキャンバスの内容と文脈を把握してから作業して”
