"use strict";$(function(){$("#result_decidim_accountability_status_id").change(function(){var t=$(this).find(":selected").data("progress");(t||0===t)&&$("#result_progress").val(t)})});