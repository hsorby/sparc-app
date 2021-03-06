<template>
  <div class="resources-search-results">
    <div
      v-for="data in tableData"
      :key="data.sys.id"
      class="resources-search-results__items"
    >
      <div class="resources-search-results__items--image">
        <img v-show="data.fields.logo" :src="getBannerImage(data)" />
      </div>
      <div class="resources-search-results__items--content">
        <a :href="data.fields.url" target="blank">
          <h2>{{ data.fields.name }}</h2>
        </a>
        <p class="resources-search-results__items--content-date">
          {{ formatDate(data.sys.updatedAt) }}
        </p>
        <p class="resources-search-results__items--content-description">
          {{ data.fields.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { pathOr } from 'ramda'

import FormatDate from '@/mixins/format-date'
export default {
  name: 'ResourceSearchResults',

  mixins: [FormatDate],
  props: {
    tableData: {
      type: Array,
      default: () => []
    }
  },

  methods: {
    /**
     * Gets the banner image for the resource
     * @returns {String}
     */
    getBannerImage: function(data) {
      return pathOr('', ['fields', 'logo', 'fields', 'file', 'url'], data)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/_variables.scss';
.resources-search-results {
  &__items {
    height: 9.375rem;
    display: flex;
    flex-direction: row;
    border-bottom: solid 1px $light-grey;
    padding: 1.25em 0;
    @media screen and (max-width: 768px) {
      height: 100%;
      display: block;
    }
    @media screen and (max-width: 1024px) {
      height: 100%;
    }
    h2 {
      font-size: 1em;
      color: $median;
      margin-bottom: 0.375rem;
      line-height: 22px;
      font-weight: 500;
    }

    &--content {
      a {
        text-decoration: none;
      }
    }

    &--image {
      margin-right: 1rem;
      @media (min-width: 48em) {
        flex-shrink: 0;
        width: 128px;
      }
      img {
        width: 100%;
        height: auto;
      }
    }
    &--content-date {
      font-size: 1em;
      font-style: italic;
      line-height: 18px;
      font-weight: normal;
      color: $dark-sky;
    }
    &--content-description {
      font-size: 1em;
      font-weight: normal;
      line-height: 22px;
      font-weight: normal;
      color: $dark-sky;
    }
  }
}
</style>
