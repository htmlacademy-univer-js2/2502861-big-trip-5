import PointListPresenter from './presenter/point-list-presenter.js';
import PointsListModel from './model/points-list-model.js';
import FilterPresenter from './presenter/filter-presenter.js';
import FilterModel from './model/filter-model.js';
import NewPointButtonPresenter from './presenter/new-point-button-presenter.js';
import PointsApiService from './point-api-service.js';
import { AUTHORIZATION, END_POINT } from './consts.js';

const newPointButtonPresenter = new NewPointButtonPresenter({
  container: document.querySelector('.trip-main')
});

const pointsListModel = new PointsListModel({ pointsApiService: new PointsApiService(END_POINT, AUTHORIZATION) });
const filterModel = new FilterModel();
const listPresenter = new PointListPresenter({
  tripEvents: document.querySelector('.trip-events'),
  filterModel,
  pointsListModel,
  newPointButtonPresenter
});

new FilterPresenter({
  filterContainer: document.querySelector('.trip-controls__filters'),
  filterModel,
  pointsListModel
}).init();
listPresenter.init();
newPointButtonPresenter.init({ onNewPointButtonClick: listPresenter.onNewPointButtonClick });
pointsListModel.init();
