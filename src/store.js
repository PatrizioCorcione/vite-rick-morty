import { reactive } from "vue";
export const store = reactive({
  characters:[],
  apiUrl:'https://rickandmortyapi.com/api/character',
  search: '',
  statuses:[],
  species:[],
  status:'',
  specie:'',
  page:1,
  pageTot:0,
});