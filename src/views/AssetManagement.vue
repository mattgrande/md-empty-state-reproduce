<template>
<div class="asset-management">
    <div class="md-layout">
        <div class="md-layout-item">
            <h1 v-once class="md-headline">{{page.title}}</h1>
        </div>
    </div>
    <div>
      <div v-if="msg === 'LOADING'">[Animated Gif]</div>
      <DataTable v-if="msg === 'LOADED'"
                 :allRows="roles"
                 :page="page"
                 v-on:newButtonClicked="newAsset"
                 v-on:editButtonClicked="editAsset"
                 v-on:deleteButtonClicked="deleteAsset"></DataTable>
    </div>
</div>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import { Component, Emit, Provide, Vue } from 'vue-property-decorator';
import { AssetPage } from '../store/assetPage';
import { Role } from '../store/interfaces';
import DataTable from '@/components/DataTable.vue';

@Component({
  components: { DataTable },
  computed: mapState({ roles: 'allRoles' })
})
export default class AssetManagement extends Vue {
  @Provide() private search: string = '';
  @Provide() private page!: AssetPage;
  @Provide() private msg!: string;
  @Provide() private showDialog: boolean = false;

  @Emit() private newAsset() {
    /* TODO */
  }

  @Emit() private editAsset(id: string) {
    /* TODO */
  }

  @Emit() private deleteAsset(id: string) {
      /* TODO */
  }

  private beforeCreate() {
    this.msg = 'LOADING';
    this.page = {
      title: 'Role Management',
      filters: [],
      navigation: {
        breadcrumbs: [
          {
            title: 'All Roles'
          }
        ]
      },
      actions: [],
      canEdit: true,
      canDelete: true,
      canCreate: true,
      createButtonText: 'New role',
      tableColumns: [
          {
              dataField: 'name',
              title: 'Role'
          }
      ]
    };
  }

  private created() {
    this.$store.dispatch('getAllRoles', this.page.tableColumns)
      .then(() => {
        this.msg = 'LOADED';
        this.$forceUpdate();
      });
  }
}
</script>

<style scoped lang="scss">
div.md-alignment-top-right {
  text-align: right;
}
</style>