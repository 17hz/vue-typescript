import axios from "./axios";
import { response } from "@interface/common.interface";

export const get = function(url: string, params): Promise<response> {
  if (typeof params === "object") {
    for (let key in params) {
      if (
        params[key] === "" ||
        params[key] === null ||
        params[key] === "undefined"
      ) {
        delete params[key];
        continue;
      }
      let index = url.indexOf(`{${key}}`);
      if (index >= 0) {
        url = url.replace(`{${key}}`, params[key]);
        delete params[key];
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.get(url, { params });
      if (res.data.code == "0") {
        resolve(res.data);
      } else {
        reject(res.data.msg);
      }
    } catch (e) {
      reject((e.response && e.response.data && e.response.data.msg) || "网络异常!");
    }
  });
};

export const save = function(url: string, params, body): Promise<response> {
  if (typeof params === "object") {
    for (let key in params) {
      let index = url.indexOf(`{${key}}`);
      if (index >= 0) {
        url = url.replace(`{${key}}`, params[key]);
        delete params[key];
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.post(url, body);
      if (res.data.code == "0") {
        resolve(res.data);
      } else {
        reject(res.data.msg);
      }
    } catch (e) {
      reject((e.response && e.response.data && e.response.data.msg) || "网络异常!");
    }
  });
};

export const update = function(url: string, params, body): Promise<response> {
  if (typeof params === "object") {
    for (let key in params) {
      let index = url.indexOf(`{${key}}`);
      if (index >= 0) {
        url = url.replace(`{${key}}`, params[key]);
        delete params[key];
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.put(url, body);
      if (res.data.code == "0") {
        resolve(res.data);
      } else {
        reject(res.data.msg);
      }
    } catch (e) {
      reject((e.response && e.response.data && e.response.data.msg) || "网络异常!");
    }
  });
};

export const Delete = function(url: string, params) {
  if (typeof params === "object") {
    for (let key in params) {
      let index = url.indexOf(`{${key}}`);
      if (index >= 0) {
        url = url.replace(`{${key}}`, params[key]);
        delete params[key];
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    try {
      let res = await axios.delete(url, { params });
      if (res.data.code == "0") {
        resolve(res.data);
      } else {
        reject(res.data.msg);
      }
    } catch (e) {
      reject((e.response && e.response.data && e.response.data.msg) || "网络异常!");
    }
  });
};
