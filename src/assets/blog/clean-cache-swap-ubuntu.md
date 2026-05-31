---
title: Clean cache, swap in ubuntu
description: Learn how to safely clean cache and reset swap memory in Ubuntu to free RAM, improve performance, and fix system slowdowns...
date: 2026-02-01
tags: ubuntu, pagination
slug: clean-cache-swap-ubuntu
---

# Clean the cache and swap in ubuntu

- To Clean the cache and swap in ubuntu<br>

# Follow these commands

- sudo sh -c "/usr/bin/echo 3 > /proc/sys/vm/drop_caches"<br>
- free && sync && echo 3 > /proc/sys/vm/drop_caches && free<br>
- sudo apt-get clean<br>
- sudo apt-get autoclean<br>
- swapoff -a && swapon -a<br>
