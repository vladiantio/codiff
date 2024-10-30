export const languages = [
  { name: 'text/plain', filePattern:null, title:'Plain Text' },
  { name: 'html', filePattern:'\\.html', title:'HTML' },
  { name: 'xml', filePattern:'\\.(xml|svg)', contentPattern: '<\\?xml', title:'XML' },
  { name: 'css', filePattern:'\\.css', title:'CSS' },
  { name: 'javascript', filePattern:'\\.jsx?', title:'JavaScript/JSX' },
  { name: 'typescript', filePattern:'\\.tsx?', title:'TypeScript/TSX' },
  { name: 'c', filePattern:'\\.c', title:'C' },
  { name: 'cpp', filePattern:'\\.cpp', title:'C++' },
  { name: 'java', filePattern:'\\.java', title:'Java' },
  { name: 'json', filePattern:'\\.json', title:'JSON' },
  { name: 'yaml', filePattern:'\\.yml', title:'YAML' },
  { name: 'sql', filePattern:'\\.sql', title:'SQL' },
  { name: 'python', filePattern:'\\.py', title:'Python' },
  { name: 'rust', filePattern:'\\.rs', title:'Rust' },
  { name: 'php', filePattern:'\\.php', title:'PHP' },
  { name: 'lua', filePattern:'\\.lua', title:'Lua' },
  { name: 'csharp', filePattern:'\\.cs', title:'C#' },
  { name: 'razor', filePattern:'\\.(cshtml|razor)', title:'Razor C#' },
  { name: 'ini', filePattern:'\\.ini', title:'INI' },
  { name: 'markdown', filePattern:'\\.md', title:'Markdown' },
  { name: 'bat', filePattern:'\\.(bat|cmd)', title:'Batch' },
  { name: 'shellscript', filePattern:'\\.sh', title:'Shell Script' },
  { name: 'csv', filePattern:'\\.csv', title:'CSV' },
  { name: 'perl', filePattern:'\\.pl', title:'Perl' },
  { name: 'vb', filePattern:'\\.vb', title:'Visual Basic' },
  { name: 'vue', filePattern:'\\.vue', title:'Vue' },
  { name: 'svelte', filePattern:'\\.svelte', title:'Svelte' },
  { name: 'vim', filePattern:'\\.vim', title:'Vim' },
  { name: 'pug', filePattern:'\\.pug', title:'Pug' },
  { name: 'powershell', filePattern:'\\.ps', title:'PowerShell' },
  { name: 'handlebars', filePattern:'\\.hbs', title:'Handlebars' },
  { name: 'http', filePattern:'\\.http', title:'HTTP' },
  { name: 'toml', filePattern:'\\.toml', title:'TOML' },
  { name: 'zig', filePattern:'\\.zig', title:'Zig' },
  { name: 'go', filePattern:'\\.go', title:'Go' },
  { name: 'graphql', filePattern:'\\.gql', title:'GraphQL' },
  { name: 'ignore', filePattern:'\\.gitignore', title:'Git Ignore' },
  { name: 'ruby', filePattern:'\\.rb', title:'Ruby' },
  { name: 'kotlin', filePattern:'\\.kt', title:'Kotlin' },
  { name: 'solidity', filePattern:'\\.sol', title:'Solidity' },
];
languages.sort((a, b) => a.title.localeCompare(b.title));