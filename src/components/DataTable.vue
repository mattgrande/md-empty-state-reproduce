<template>
<md-table v-model="rows" md-sort="name" md-sort-order="asc">
  <md-table-toolbar>
    <md-field md-clearable class="md-toolbar-section-end">
      <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" class="wx-table-search" />
    </md-field>
  </md-table-toolbar>

  <md-table-empty-state
    md-label="No roles found"
    :md-description="`No role found for this '${search}' query. Try a different search term or create a new role.`">
    <md-button v-if="page.canCreate" class="md-primary md-raised" @click="newAsset" v-once>{{page.createButtonText}}</md-button>
  </md-table-empty-state>

  <md-table-row slot="md-table-row" slot-scope="{ item }">
    <md-table-cell md-label="Edit" v-if="page.canEdit">
      <md-button v-on:click="editAsset(item.id)">Edit</md-button>
    </md-table-cell>
    <md-table-cell v-for="tc in page.tableColumns"
                   v-bind:key="tc.dataField"
                   :md-numeric="tc.isNumber"
                   :md-label="tc.title" :md-sort-by="tc.dataField">
      <TableCell :item="item" :column="tc"></TableCell>
    </md-table-cell>
    <md-table-cell md-label="Delete" v-if="page.canDelete">
      <md-button v-on:click="deleteAsset(item.id)" class="md-accent">Delete</md-button>
    </md-table-cell>
  </md-table-row>
</md-table>
</template>

<script lang="ts">
import { Component, Emit, Prop, Provide, Vue } from 'vue-property-decorator';
import { AssetPage } from '../store/assetPage';
import { TableCell } from '@/components/TableCell';

@Component({
  components: { TableCell },
  data() {
    return {
      rows: this.allRows
    };
  }
})
export default class AssetManagement extends Vue {
  @Prop() public msg!: string;
  @Prop() public allRows!: any[];
  @Prop() public page!: AssetPage;

  @Provide() private search: string = '';

  @Emit() private newAsset() {
      this.$emit('newButtonClicked');
  }

  @Emit() private searchOnTable() {
    const items = Object.assign([], this.allRows);
    const terms = this.search;
    if (terms) {
      this.rows = items.filter((item: any) => JSON.stringify(item).includes(terms));
    }
    return items;
  }

  @Emit() private editAsset(id: string) {
      this.$emit('editButtonClicked', id);
  }

  @Emit() private deleteAsset(id: string) {
    this.$emit('deleteButtonClicked', id);
  }
}
</script>

<style scoped lang="scss">
div.md-alignment-top-right {
  text-align: right;
}

tr.deleting > td span {
  text-decoration: line-through;
}
</style>