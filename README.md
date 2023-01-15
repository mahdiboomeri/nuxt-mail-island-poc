# Generating Nuxt Email Templates Using Islands

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Usage

Define your components with `.island.vue` prefix. then you can access the html with `/api/generateTemplate` endpoint.

## Example

```bash
GET http://localhost:3000/api/generateTemplate?name=EmailWelcome&propsName=Mahdi
```
