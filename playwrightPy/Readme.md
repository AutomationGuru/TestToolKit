

- Using poetry as dependency management 
poetry init
toml file is the text file to specify the depedency, can sepcify the packages for dev and running 
- Adding new packages, poetry add <packagename>
`poetry lock`
like `poetry add pytest@latest`
`poetry show --tree`

- pytest : python testing framework vs unittest  ( easier pytest and useful plaugin with better reports )



Install poetry
then run :
`poetry config virtualenvs.in-project true` // creates virtual env
`poetry shell` uses the virtual env
`poetry install`
`pytest`