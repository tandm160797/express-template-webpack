# Development

### In package.json add "type": "module" and yarn dev

```
{
	...,
	"devDependencies": {
		...,
		"webpack": "^5.24.3",
		"webpack-cli": "^4.5.0"
	},
	"type": "module"
}

yarn dev
```

---

# Deploy in Node environment

### In package.json remove "type": "module" then yarn build + yarn start

```
{
	...,
	"devDependencies": {
		...,
		"webpack": "^5.24.3",
		"webpack-cli": "^4.5.0"
	}
}

yarn build && yarn start
```
