<template>
  <q-page class="flex flex-center q-pa-md">
    <q-stepper
      v-model="step"
      ref="stepper"
      vertical
      animated
      alternative-labels
      done-color="positive"
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
        />

        <p class="text-dark">{{ $t("questions")[2] }}</p>
        <q-option-group
          v-model="answer2"
          @input="changeAnswer2"
          :options="options2"
        />
      </q-step>

      <q-step
        :name="2"
        prefix="2"
        :title="$t('demographics')"
        :done="step > 2"
        :disable="isDesable"
      >
        <p class="text-dark">{{ $t("questions")[3] }}</p>
        <q-slider
          v-model="answer3"
          :min="35"
          :max="85"
          label
          label-always
          class="q-mt-lg"
        />

        <!-- <p class="text-dark">{{ $t("questions")[4] }}</p>
        <q-select
          filled
          v-model="answer4"
          :options="options4"
          :label="$t('selectRace')"
          class="q-mb-lg"
        />

        <p class="text-dark">{{ $t("questions")[5] }}</p>
        <q-select
          filled
          v-model="answer4"
          :options="options4"
          :label="$t('selectRace')"
        /> -->
      </q-step>

      <q-step
        :name="3"
        prefix="3"
        :title="$t('familyHistory')"
        :disable="isDesable"
      >
        <p class="text-dark">{{ $t("questions")[6] }}</p>
        <q-option-group
          v-model="answer6"
          @input="changeAnswer6"
          :options="options6"
        />

        <p
          class="q-mt-lg q-mx-xl"
          :class="answer6 == 1 ? 'text-dark' : 'text-grey'"
        >
          {{ $t("questions")[7] }}
        </p>
        <q-option-group
          v-model="answer7"
          :options="options7"
          class="q-mx-xl"
          :disabled="answer6 != 1"
        />

        <p
          class="q-mt-lg q-mx-xl"
          :class="answer6 == 1 ? 'text-dark' : 'text-grey'"
        >
          {{ $t("questions")[8] }}
        </p>
        <q-option-group
          v-model="answer8"
          :options="options8"
          class="q-mx-xl"
          :disabled="answer6 != 1"
        />

        <p class="text-dark q-mt-lg">
          {{ $t("questions")[9] }}
        </p>
        <q-option-group v-model="answer9" :options="options9" />

        <p class="text-dark q-mt-lg">{{ $t("questions")[10] }}</p>
        <q-select
          filled
          v-model="answer10"
          :options="options10"
          :label="$t('select')"
          class="q-mb-lg"
        />

        <p class="text-dark q-mt-lg">
          {{ $t("questions")[11] }}
        </p>
        <q-option-group v-model="answer11" :options="options11" />
      </q-step>

      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn
            v-if="step === 3"
            @click="calculateRisk()"
            color="pink"
            :label="$t('calculateRisk')"
            :loading="loading"
          />
          <q-btn
            v-if="step !== 3"
            @click="next()"
            color="pink"
            :label="$t('continue')"
            :disable="isDesable"
          />
          <q-btn
            v-if="step > 1"
            flat
            color="pink"
            @click="previous()"
            :label="$t('back')"
            class="q-ml-sm"
          />
        </q-stepper-navigation>
      </template>
    </q-stepper>
  </q-page>
</template>

<script>
import { QSpinnerGears } from "quasar";

export default {
  name: "PageIndex",

  data() {
    return {
      loading: false,

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
      ],

      answer3: 40,

      answer4: null,
      options4: [
        {
          label: this.$t("races")[0],
          value: 1
        },
        {
          label: this.$t("races")[1],
          value: 2
        },
        {
          label: this.$t("races")[2],
          value: 3
        },
        {
          label: this.$t("races")[3],
          value: 4
        },
        {
          label: this.$t("races")[4],
          value: 5
        },
        {
          label: this.$t("unknown"),
          value: 6
        }
      ],

      answer6: null,
      options6: [
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
      ],

      answer7: null,
      options7: [
        {
          label: "1",
          value: 1
        },
        {
          label: this.$t("numberOrOlder", { number: 2 }),
          value: 2
        }
      ],

      answer8: null,
      options8: [
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
      ],

      answer9: null,
      options9: [
        {
          label: this.$t("AtoB", { a: 7, b: 11 }),
          value: 1
        },
        {
          label: this.$t("AtoB", { a: 12, b: 13 }),
          value: 2
        },
        {
          label: this.$t("numberOrMore", { number: 14 }),
          value: 3
        }
      ],

      answer10: null,
      options10: [
        {
          label: this.$t("noBirths"),
          value: 1
        },
        {
          label: "< 20",
          value: 2
        },
        {
          label: "20-24",
          value: 3
        },
        {
          label: "25-29",
          value: 4
        },
        {
          label: this.$t("ageOrOlder", { age: 30 }),
          value: 5
        },
        {
          label: this.$t("unknown"),
          value: 6
        }
      ],

      answer11: null,
      options11: [
        {
          label: this.$t("none"),
          value: 1
        },
        {
          label: this.$t("one"),
          value: 2
        },
        {
          label: this.$t("moreThanOne"),
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
      if (value === 2 && this.answer2 == 1) {
        this.answer2 = 2;
      }
    },

    changeAnswer2(value) {
      if (value === 2 && this.answer1 == 1) {
        this.answer1 = 2;
      }
    },

    changeAnswer6(value) {},

    next() {
      this.$refs.stepper.next();
    },

    previous() {
      this.$refs.stepper.previous();
    },

    calculateRisk() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 750);

      const dialog = this.$q.dialog({
        title: this.$t("calculating"),
        dark: false,
        message: "0%",
        progress: {
          spinner: QSpinnerGears,
          color: "pink"
        },
        persistent: true, // we want the user to not be able to close it
        ok: false // we want the user to not be able to close it
      });

      // we simulate some progress here...
      let percentage = 0;
      const interval = setInterval(() => {
        percentage = Math.min(100, percentage + Math.floor(Math.random() * 22));

        // we update the dialog
        dialog.update({
          message: `${percentage}%`
        });

        // if we are done...
        if (percentage === 100) {
          clearInterval(interval);
          const result = Math.floor(Math.random() * 100);
          dialog.update({
            title: this.$t("success"),
            message: this.$t("result", { result }),
            progress: false,
            ok: true
          });
        }
      }, 500);
    }
  }
};
</script>
