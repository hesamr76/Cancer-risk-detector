<template>
  <q-page class="flex flex-center q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      vertical
      animated
      alternative-labels
      active-color="deep-orange"
      done-color="secondary"
      class="full-width"
    >
      <q-step
        :name="1"
        prefix="1"
        :title="$t('patientEligibility')"
        :done="step > 1"
      >
        <p class="text-dark">{{ $t("questions")[1] }}</p>
        <q-option-group
          v-model="answer1"
          @input="changeAnswer1"
          :options="options1"
          color="orange"
        />

        <p class="text-dark">{{ $t("questions")[2] }}</p>
        <q-option-group
          v-model="answer2"
          @input="changeAnswer2"
          :options="options2"
          color="orange"
        />
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        :title="$t('demographics')"
        :done="step > 2"
        :disable="isDesable"
      >
        form2
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        :title="$t('familyHistory')"
        :disable="isDesable"
      >
        form 3
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            @click="next()"
            color="deep-orange"
            :label="step === 3 ? 'Finish' : 'Continue'"
            :disable="isDesable"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="deep-orange"
            @click="previous()"
            label="Back"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",

  data() {
    return {
      step: 1,

      answer1: null,
      options1: [
        {
          label: this.$t("yes"),
          value: 1
        },
        {
          label: this.$t("no"),
          value: 2
        }
      ],

      answer2: null,
      options2: [
        {
          label: this.$t("yes"),
          value: 1
        },
        {
          label: this.$t("no"),
          value: 2
        },
        {
          label: this.$t("unknown"),
          value: 3
        }
      ]
    };
  },

  computed: {
    isDesable: function() {
      return this.answer1 === 1 || this.answer2 === 1;
    }
  },

  methods: {
    changeAnswer1(value) {
      if (value === 2) {
        this.answer2 = 2;
      }
    },

    changeAnswer2(value) {
      if (value === 2) {
        this.answer1 = 2;
      }
    },

    next() {
      this.$refs.stepper.next();
    },

    previous() {
      this.$refs.stepper.previous();
    }
  }
};
</script>
