<template>
  <form @submit="submit">
    <slot />
  </form>
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import { useForm, useField } from 'vee-validate'

export default defineComponent({
  name: 'BaseForm',
  props: {
    method: {
      type: Function,
      required: true
    },
  },
  setup(props) {
    const form = useForm()
    const { handleSubmit, setErrors, handleReset } = form

    provide('form', form)
    provide('useForm', useForm)
    provide('useField', useField)

    function patchErrors(errors: Record<string, string | string[]>) {
      const patchedErrors = {}

      Object.keys(errors).forEach(key => {
        const error = errors[key]

        patchedErrors[key] = error instanceof Array ? error[0] : error
      })

      setErrors(patchedErrors)
    }

    const submit = handleSubmit(async (values) => {
      if (props.method) {
        try {
          await props.method(values, form)
        } catch (err) {
          if (!err.errors) {
            throw err
          }

          patchErrors(err.errors)
        }
      }
    })

    function reset() {
      handleReset()
    }

    return {
      submit,
      reset,
    }
  }
})
</script>
