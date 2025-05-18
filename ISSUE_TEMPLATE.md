#### `feature_request.yaml`

```yaml
name: "Новая функция"
about: "Предложи новую идею"
labels: ["enhancement"]
body:
  - type: markdown
    text: "## Описание"
  - type: textarea
    id: description
    attributes:
      label: "Опиши, что ты хочешь добавить"
```

#### `bug_report.yaml`

```yaml
name: "Баг"
about: "Сообщи об ошибке"
labels: ["bug", "needs triage"]
body:
  - type: markdown
    text: "## Где произошла ошибка?"
  - type: input
    id: location
    attributes:
      label: "Страница или действие"
```
