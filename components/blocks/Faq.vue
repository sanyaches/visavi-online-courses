<template>
  <div id="main-faq" class="faq">
    <b-container>
      <div class="faq__header">
        <h2 class="faq__title">
          {{ $t('faq.faq_title') }}
        </h2>
      </div>
      <div class="faq__list">
        <div class="accordion" role="tablist">
          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-1 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.first.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.first.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-2 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.second.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.second.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-3 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.third.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.third.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-4 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.fourth.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-4" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.fourth.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-5 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.fifth.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-5" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.fifth.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-6 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.sixth.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-6" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.sixth.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>

          <b-card no-body class="mb-3">
            <b-card-header header-tag="header" class="faq__question" role="tab">
              <b-button v-b-toggle.accordion-7 class="faq__question-button" block>
                <div class="faq__question-title">
                  {{ $t('faq.seventh.question') }}
                </div>
                <font-awesome-icon class="faq__question-icon open-icon" icon="fa-solid fa-plus" />
                <font-awesome-icon class="faq__question-icon close-icon" icon="fa-solid fa-xmark" />
              </b-button>
            </b-card-header>
            <b-collapse id="accordion-7" visible accordion="my-accordion" role="tabpanel">
              <b-card-body class="faq__answer">
                {{ $t('faq.seventh.answer') }}
              </b-card-body>
            </b-collapse>
          </b-card>
        </div>
      </div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.faq {
  padding: 4rem 0;

  @media screen and (max-width: 991px) {
    padding: 2.5rem 0 1rem;
  }

  &__title {
    text-transform: uppercase;
    font-family: var(--font-family-cormorant);
    font-weight: 500;
    font-size: 2.5rem;
    text-align: center;

    @media screen and (max-width: 991px) {
      font-size: 2.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 2rem;
    }
  }

  &__list {
    margin-top: 2rem;
  }

  &__question {
    padding: 0;
  }

  &__question-button {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.2rem 2rem;
    border-radius: 0;
    box-sizing: border-box;
    border: 1px solid #b6a498;

    @media screen and (max-width: 991px) {
      padding: 0.6rem 2rem;
    }

    &.not-collapsed {
      background-color: #b6a498;
    }

    &:not(:disabled):not(.disabled):active {
      background-color: #cabaaf;
    }

    &.btn-secondary:not(:disabled):not(.disabled):active:focus,
    &.btn-secondary:focus {
      box-shadow: none;
    }

    &.collapsed {
      background-color: #fff;
      color: #b6a498;
    }
  }

  &__question-button.not-collapsed .open-icon {
    display: none;
  }

  &__question-button.collapsed .close-icon {
    display: none;
  }

  &__question-button.not-collapsed .close-icon {
    display: block;
  }

  &__question-icon {
    font-size: 1.6rem;
    min-width: 2rem;
  }

  &__question-title {
    font-weight: 600;
    font-size: 1.4rem;
    text-transform: uppercase;
    text-align: left;
    margin-right: 0.6rem;

    @media screen and (max-width: 991px) {
      font-size: 1.2rem;
    }

    @media screen and (max-width: 480px) {
      font-size: 1rem;
    }
  }

  &__answer {
    background-color: #b6a498;
    color: #fff;
    padding: 0.5rem 2rem 1.5rem;
    font-size: 1.2rem;

    @media screen and (max-width: 991px) {
      font-size: 1rem;
      padding: 0.5rem 2rem 1rem;
    }
  }
}
</style>
