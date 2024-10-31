// (1) Desired editor features:
// BEGIN_FEATURES
import 'monaco-editor/esm/vs/base/browser/ui/codicons/codicon/codicon.css';
// import 'monaco-editor/esm/vs/editor/browser/coreCommands.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/codeEditor/codeEditorWidget.js';
// import 'monaco-editor/esm/vs/editor/browser/widget/diffEditor/diffEditor.contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/anchorSelect/browser/anchorSelect.js';
// import 'monaco-editor/esm/vs/editor/contrib/bracketMatching/browser/bracketMatching.js';
// import 'monaco-editor/esm/vs/editor/contrib/caretOperations/browser/caretOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/caretOperations/browser/transpose.js';
// import 'monaco-editor/esm/vs/editor/contrib/clipboard/browser/clipboard.js';
// import 'monaco-editor/esm/vs/editor/contrib/codeAction/browser/codeActionContributions.js';
// import 'monaco-editor/esm/vs/editor/contrib/codelens/browser/codelensController.js';
// import 'monaco-editor/esm/vs/editor/contrib/colorPicker/browser/colorContributions.js';
// import 'monaco-editor/esm/vs/editor/contrib/colorPicker/browser/standaloneColorPickerActions.js';
// import 'monaco-editor/esm/vs/editor/contrib/comment/browser/comment.js';
// import 'monaco-editor/esm/vs/editor/contrib/contextmenu/browser/contextmenu.js';
// import 'monaco-editor/esm/vs/editor/contrib/cursorUndo/browser/cursorUndo.js';
// import 'monaco-editor/esm/vs/editor/contrib/diffEditorBreadcrumbs/browser/contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/dnd/browser/dnd.js';
// import 'monaco-editor/esm/vs/editor/contrib/documentSymbols/browser/documentSymbols.js';
// import 'monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/copyPasteContribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/dropOrPasteInto/browser/dropIntoEditorContribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/find/browser/findController.js';
// import 'monaco-editor/esm/vs/editor/contrib/folding/browser/folding.js';
// import 'monaco-editor/esm/vs/editor/contrib/fontZoom/browser/fontZoom.js';
// import 'monaco-editor/esm/vs/editor/contrib/format/browser/formatActions.js';
// import 'monaco-editor/esm/vs/editor/contrib/gotoError/browser/gotoError.js';
// import 'monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/goToCommands.js';
// import 'monaco-editor/esm/vs/editor/contrib/gotoSymbol/browser/link/goToDefinitionAtPosition.js';
// import 'monaco-editor/esm/vs/editor/contrib/hover/browser/hoverContribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/inPlaceReplace/browser/inPlaceReplace.js';
// import 'monaco-editor/esm/vs/editor/contrib/indentation/browser/indentation.js';
// import 'monaco-editor/esm/vs/editor/contrib/inlayHints/browser/inlayHintsContribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/inlineCompletions/browser/inlineCompletions.contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/inlineEdit/browser/inlineEdit.contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/inlineEdits/browser/inlineEdits.contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/inlineProgress/browser/inlineProgress.js';
// import 'monaco-editor/esm/vs/editor/contrib/lineSelection/browser/lineSelection.js';
// import 'monaco-editor/esm/vs/editor/contrib/linesOperations/browser/linesOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/linkedEditing/browser/linkedEditing.js';
// import 'monaco-editor/esm/vs/editor/contrib/links/browser/links.js';
// import 'monaco-editor/esm/vs/editor/contrib/longLinesHelper/browser/longLinesHelper.js';
// import 'monaco-editor/esm/vs/editor/contrib/multicursor/browser/multicursor.js';
// import 'monaco-editor/esm/vs/editor/contrib/parameterHints/browser/parameterHints.js';
// import 'monaco-editor/esm/vs/editor/contrib/placeholderText/browser/placeholderText.contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/readOnlyMessage/browser/contribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/rename/browser/rename.js';
// import 'monaco-editor/esm/vs/editor/contrib/sectionHeaders/browser/sectionHeaders.js';
// import 'monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/documentSemanticTokens.js';
// import 'monaco-editor/esm/vs/editor/contrib/semanticTokens/browser/viewportSemanticTokens.js';
// import 'monaco-editor/esm/vs/editor/contrib/smartSelect/browser/smartSelect.js';
// import 'monaco-editor/esm/vs/editor/contrib/snippet/browser/snippetController2.js';
// import 'monaco-editor/esm/vs/editor/contrib/stickyScroll/browser/stickyScrollContribution.js';
// import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js';
// import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestInlineCompletions.js';
// import 'monaco-editor/esm/vs/editor/contrib/toggleTabFocusMode/browser/toggleTabFocusMode.js';
// import 'monaco-editor/esm/vs/editor/contrib/tokenization/browser/tokenization.js';
// import 'monaco-editor/esm/vs/editor/contrib/unicodeHighlighter/browser/unicodeHighlighter.js';
// import 'monaco-editor/esm/vs/editor/contrib/unusualLineTerminators/browser/unusualLineTerminators.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordHighlighter/browser/wordHighlighter.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordOperations/browser/wordOperations.js';
// import 'monaco-editor/esm/vs/editor/contrib/wordPartOperations/browser/wordPartOperations.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/iPadShowKeyboard/iPadShowKeyboard.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/inspectTokens/inspectTokens.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneCommandsQuickAccess.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoLineQuickAccess.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneGotoSymbolQuickAccess.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/quickAccess/standaloneHelpQuickAccess.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/referenceSearch/standaloneReferenceSearch.js';
// import 'monaco-editor/esm/vs/editor/standalone/browser/toggleHighContrast/toggleHighContrast.js';
// END_FEATURES
import { editor } from 'monaco-editor/esm/vs/editor/editor.api.js';

// (2) Desired languages:
// BEGIN_LANGUAGES
// import 'monaco-editor/esm/vs/language/html/monaco.contribution.js';
// import 'monaco-editor/esm/vs/language/json/monaco.contribution.js';
// import 'monaco-editor/esm/vs/language/typescript/monaco.contribution.js';
// import 'monaco-editor/esm/vs/language/css/monaco.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/abap/abap.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/apex/apex.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/azcli/azcli.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/bat/bat.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/bicep/bicep.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/cameligo/cameligo.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/clojure/clojure.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/coffee/coffee.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/csharp/csharp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/csp/csp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/css/css.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/cypher/cypher.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/dart/dart.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/dockerfile/dockerfile.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/ecl/ecl.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/elixir/elixir.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/flow9/flow9.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/freemarker2/freemarker2.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/fsharp/fsharp.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/go/go.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/graphql/graphql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/handlebars/handlebars.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/hcl/hcl.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/html/html.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/ini/ini.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/java/java.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/julia/julia.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/kotlin/kotlin.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/less/less.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/lexon/lexon.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/liquid/liquid.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/lua/lua.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/m3/m3.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/markdown/markdown.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/mdx/mdx.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/mips/mips.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/msdax/msdax.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/mysql/mysql.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/objective-c/objective-c.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pascal/pascal.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pascaligo/pascaligo.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/perl/perl.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pgsql/pgsql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/php/php.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/pla/pla.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/postiats/postiats.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/powerquery/powerquery.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/powershell/powershell.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/protobuf/protobuf.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/pug/pug.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/python/python.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/qsharp/qsharp.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/r/r.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/razor/razor.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/redis/redis.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/redshift/redshift.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/restructuredtext/restructuredtext.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/ruby/ruby.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/rust/rust.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/sb/sb.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/scala/scala.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/scheme/scheme.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/scss/scss.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/shell/shell.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/solidity/solidity.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/sophia/sophia.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/sparql/sparql.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/sql/sql.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/st/st.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/swift/swift.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/systemverilog/systemverilog.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/tcl/tcl.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/twig/twig.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/typespec/typespec.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/vb/vb.contribution.js';
// import 'monaco-editor/esm/vs/basic-languages/wgsl/wgsl.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/xml/xml.contribution.js';
import 'monaco-editor/esm/vs/basic-languages/yaml/yaml.contribution.js';
// END_LANGUAGES

import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

self.MonacoEnvironment = {
  getWorker(_) {
    return new editorWorker();
  },
};

// Set theme
editor.setTheme('vs-dark');

// // Disable TypeScript checking
// languages.typescript.typescriptDefaults.setDiagnosticsOptions({
//   noSemanticValidation: true,
//   noSyntaxValidation: true
// });

// // Add TSX support
// languages.typescript.typescriptDefaults.setCompilerOptions({
//   tsx: 'react'
// });