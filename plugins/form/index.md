# Form

```ts
import form from '/-/plugins/form'

app.use(form)
```

<div class="h-12"></div>

## Usage

<div class="mt-4">
    <base-form :method="submit"
               class="flex flex-col space-y-4">
        <base-input v-model="form.name"
                    label="Name"
                    name="name"
                    required></base-input>
        <base-input v-model="form.email"
                    label="Email"
                    name="email"
                    type="email"></base-input>
        <base-checkbox v-model="form.confirm"
                       label="Confirm"
                       name="confirm"></base-checkbox>
        <base-button type="submit">Submit</base-button>
    </base-form>
</div>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: '',
        confirm: false,
      }
    }
  },
  methods: {
    submit(values, form) {
      throw {
        errors: {
          name: 'Test Custom Error',
          confirm: 'Confirm Error',
        }
      }
    }
  }
}
</script>
