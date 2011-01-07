
fs = require 'fs'
{exec} = require 'child_process'


task 'test', 'run tests', () ->
  async_testing = require 'async_testing'
  async_testing.run('build/test/tests.js', [])


task 'build', 'src/ --> build/', () ->
  
  # .coffee --> .js
  exec 'coffee -co build src', (err, stdout, stderr) ->
    if err
      console.log stdout
      console.log stderr
      throw new Error "Error while compiling .coffee to .js"
    
    # Read arg names from command implementations
    # and export them to command-arguments.js
    lines = []
    for name in require('./build/commands').names
      data = fs.readFileSync "src/commands/#{name}.coffee"
      code = data.toString 'utf-8'
      m = code.match new RegExp "#{name}: \\((.*)\\) ->\n"
      if not m
        throw new Error "Couldn't read implementation for #{name}"
      args = if m[1].length > 0
        m[1].split(', ')
      else
        []
      lines.push "exports.#{name} = #{JSON.stringify args};\n"
    fs.writeFileSync "build/command-arguments.js", lines.join('')
