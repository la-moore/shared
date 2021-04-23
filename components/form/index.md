# Form

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
                    type="email"
                    required></base-input>
        <base-button type="submit">Submit</base-button>
    </base-form>
</div>

<script>
export default {
  data () {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    submit() {
      console.log(this.form)
    }
  }
}
</script>
