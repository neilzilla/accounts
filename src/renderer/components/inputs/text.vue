<template>
    <div class="w-full">
        <label
            v-if="label"
        >
            {{ label }}
        </label>
        <input
            :value="value"
            @input="$emit('input', $event.target.value)"
            class="w-full"
            type="text"
        />
    </div>
</template>
<script>

export default {
    name: 'InputText',
    props: {
        label: {
            type: String,
            requred: false
        },
        value: {
            type: String,
            required: true
        }
    }
}
</script>
