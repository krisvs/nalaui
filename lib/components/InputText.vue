<template>
    <InputBase
        class="InputText"
        v-bind="{
            ...$attrs,
            ...$props
        }">
        <slot name="before" />
        <div class="InputText-wrapper">
            <Icon
                v-if="icon"
                :icon="icon"
                :size="iconSize"
                :kind="iconKind" />
            <input
                ref="input"
                :value="modelValue"
                :type="type"
                :placeholder="placeholder"
                :readonly="readonly"
                :disabled="disabled"
                :min="min"
                :max="max"
                :step="step"
                autocomplete="off"
                @input="onInput($event)"
                @focus="$emit('focus', $event)"
                @blur="$emit('blur', $event)" />
        </div>
        <slot name="after" />
    </InputBase>
</template>

<script>
import InputBase from './InputBase.vue';

export default {

    props: {
        ...InputBase.props,
        modelValue: { type: [String, Number] },
        type: { type: String },
        placeholder: { type: String },
        min: { type: Number },
        max: { type: Number },
        step: { type: Number },
        autoFocus: { type: Boolean },
        readonly: { type: Boolean },
        icon: { type: String, required: false },
        iconSize: { type: String, required: false },
        iconKind: { type: String, required: false },
    },

    emits: [
        'focus',
        'blur',
        'input',
        'update:modelValue'
    ],

    mounted() {
        if (this.autoFocus) {
            this.$refs.input?.focus();
        }
    },

    methods: {

        onInput(ev) {
            this.$emit('update:modelValue', ev.target.value);
        }

    }

};
</script>

<style scoped>
.InputText {
    --InputBase-padding: var(--sp1-5);
}

.InputText-wrapper {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
}

.Icon {
    padding: var(--sp0-5);
    pointer-events: none;
}

input, textarea {
    -webkit-appearance: none;
    box-sizing: border-box;
    flex: 1;
    padding: 0;
    border: 0;
    width: 100%;
    min-width: 0;
    outline: 0;
    user-select: text;
    background: transparent;
    color: inherit;
    font: inherit;
    cursor: inherit;
    padding-left: var(--sp4);
}
</style>
