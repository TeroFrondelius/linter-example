'use babel'

export function activate() {
  // Fill something here, optional
}

export function deactivate() {
  // Fill something here, opti onal
}

export function provideLinter() {
  return {
    name: 'Example',
    scope: 'file', // or 'project'
    lintsOnChange: true, // or true
    grammarScopes: ['source.js'],
    lint(textEditor) {
      const editorPath = textEditor.getPath()

      // Note, a Promise may be returned as well!
      return [{
        type: 'Error',
        text: 'Something went wrong',
        range: [[0,0], [0,1]],
        filePath: editorPath
      }]
    }
  }
}
